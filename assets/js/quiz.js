(function () {
  "use strict";

  const params = new URLSearchParams(location.search);
  const nivel = window.buscarNivel(Number(params.get("curso")), Number(params.get("etapa")));

  if (!nivel) {
    location.replace("index.html");
    return;
  }

  const $ = (id) => document.getElementById(id);
  const el = {
    titulo: $("nivel-titulo"),
    subtitulo: $("nivel-subtitulo"),
    progreso: $("progreso"),
    barra: $("progreso-barra"),
    puntaje: $("puntaje"),
    pregunta: $("pregunta"),
    opciones: $("opciones"),
    ayuda: $("btn-ayuda"),
  };

  let preguntas = [];
  let indice = 0;
  let puntaje = 0;
  let bloqueado = false;

  document.title = `${nivel.nombre} · Etapa ${nivel.etapa} | MANDU'ARÃ`;
  document.body.style.setProperty("--fondo", `url("${new URL(nivel.fondo, location.href)}")`);
  el.titulo.textContent = `${nivel.nombre} · Etapa ${nivel.etapa}`;
  el.subtitulo.textContent = nivel.titulo;

  function mezclar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  // Quita el punto final para que la respuesta correcta no se distinga por su formato.
  const limpiar = (texto) => texto.replace(/[.\s]+$/, "");

  function iniciar() {
    preguntas = mezclar(window.BANCO_PREGUNTAS);
    indice = 0;
    puntaje = 0;
    mostrarPregunta();
  }

  function mostrarPregunta() {
    const q = preguntas[indice];
    const opciones = mezclar([
      { texto: q.respuesta, correcta: true },
      ...q.distractores.map((texto) => ({ texto, correcta: false })),
    ]);

    el.progreso.textContent = `Pregunta ${indice + 1} de ${preguntas.length}`;
    el.barra.style.width = `${(indice / preguntas.length) * 100}%`;
    el.barra.parentElement.setAttribute("aria-valuenow", String(indice));
    el.puntaje.textContent = `${puntaje} correctas`;
    el.pregunta.textContent = q.pregunta;
    el.ayuda.hidden = !(q.ayuda || q.ayudaImg);

    el.opciones.replaceChildren(
      ...opciones.map((op, i) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion";
        boton.dataset.correcta = String(op.correcta);
        boton.innerHTML = `<span class="opcion-tecla">${i + 1}</span>`;
        boton.append(document.createTextNode(limpiar(op.texto)));
        boton.addEventListener("click", () => responder(boton, q));
        return boton;
      })
    );
    bloqueado = false;
    el.pregunta.focus({ preventScroll: true });
  }

  async function responder(boton, q) {
    if (bloqueado) return;
    bloqueado = true;

    const acierto = boton.dataset.correcta === "true";
    el.opciones.querySelectorAll(".opcion").forEach((b) => {
      b.disabled = true;
      if (b.dataset.correcta === "true") b.classList.add("es-correcta");
    });
    if (!acierto) boton.classList.add("es-incorrecta");
    if (acierto) puntaje++;
    el.puntaje.textContent = `${puntaje} correctas`;

    await Swal.fire({
      icon: acierto ? "success" : "error",
      title: acierto ? "¡Respuesta correcta!" : "Respuesta incorrecta",
      text: acierto ? "Muy bien, seguí así." : `La respuesta correcta es: ${limpiar(q.respuesta)}`,
      confirmButtonText: "Siguiente",
    });

    indice++;
    if (indice < preguntas.length) {
      mostrarPregunta();
    } else {
      terminar();
    }
  }

  async function terminar() {
    el.barra.style.width = "100%";
    const total = preguntas.length;
    const porcentaje = Math.round((puntaje / total) * 100);
    const mensaje =
      porcentaje >= 80 ? "¡Excelente dominio del tema!" :
      porcentaje >= 50 ? "Buen trabajo, podés mejorar repasando." :
      "Repasá los temas y volvé a intentarlo.";

    const { isConfirmed } = await Swal.fire({
      icon: porcentaje >= 50 ? "success" : "info",
      title: "Juego terminado",
      html: `<p class="fs-2 fw-bold mb-1">${puntaje} / ${total}</p><p class="mb-0">${porcentaje}% · ${mensaje}</p>`,
      showCancelButton: true,
      confirmButtonText: "Jugar de nuevo",
      cancelButtonText: "Elegir otro nivel",
      allowOutsideClick: false,
    });

    if (isConfirmed) iniciar();
    else location.href = "index.html#niveles";
  }

  function mostrarAyuda() {
    const q = preguntas[indice];
    if (!q || el.ayuda.hidden) return;
    Swal.fire({
      title: "Ayuda",
      text: q.ayuda || "",
      imageUrl: q.ayudaImg,
      imageAlt: q.ayudaImg ? "Imagen de ayuda para la pregunta" : undefined,
      imageHeight: q.ayudaImg ? 280 : undefined,
      confirmButtonText: "Volver a la pregunta",
    });
  }

  el.ayuda.addEventListener("click", mostrarAyuda);

  // Atajos: teclas 1-4 para responder, "A" para la ayuda.
  document.addEventListener("keydown", (ev) => {
    if (Swal.isVisible() || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    const botones = el.opciones.querySelectorAll(".opcion");
    const n = Number(ev.key);
    if (n >= 1 && n <= botones.length) botones[n - 1].click();
    else if (ev.key.toLowerCase() === "a") mostrarAyuda();
  });

  const script = document.createElement("script");
  script.src = `data/curso-${nivel.curso}-etapa-${nivel.etapa}.js`;
  script.onload = iniciar;
  script.onerror = () => {
    el.pregunta.textContent = "No se pudo cargar el banco de preguntas. Recargá la página.";
  };
  document.head.append(script);
})();
