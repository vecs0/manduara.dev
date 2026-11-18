<div align="center">

<img src="assets/img/logo.png" alt="Logo de MANDU'ARÃ" width="96">

# MANDU'ARÃ · Jugá y aprendé Historia

Juego de preguntas de Historia para estudiantes de **1°, 2° y 3° curso**: del mundo clásico a la historia del Paraguay.

[![Demo en vivo](https://img.shields.io/badge/Jugar_ahora-vecs0.github.io%2Fmanduara.dev-f2b134?style=for-the-badge&logo=githubpages&logoColor=black)](https://vecs0.github.io/manduara.dev/)
[![Versión 1](https://img.shields.io/badge/Ver_versión_1_(2023)-gray?style=for-the-badge&logo=github)](https://vecs0.github.io/manduara.dev/v1/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-ff6b6b)
![Licencia MIT](https://img.shields.io/badge/licencia-MIT-green)

<a href="https://vecs0.github.io/manduara.dev/">
  <img src="docs/screenshots/portada.webp" alt="Portada de MANDU'ARÃ" width="820">
</a>

</div>

---

## <img src="docs/icons/demo.svg" width="22" align="top" alt=""> Demo

**[https://vecs0.github.io/manduara.dev/](https://vecs0.github.io/manduara.dev/)**

Se juega desde el navegador, en computadora o celular, sin instalar nada.

| Nivel | Enlace directo |
|---|---|
| 1° Curso · Etapa 1: del mundo clásico a la Edad Moderna | [Jugar](https://vecs0.github.io/manduara.dev/quiz.html?curso=1&etapa=1) |
| 1° Curso · Etapa 2: historia del Paraguay | [Jugar](https://vecs0.github.io/manduara.dev/quiz.html?curso=1&etapa=2) |
| 2° Curso · Etapa 1: revoluciones y guerras mundiales | [Jugar](https://vecs0.github.io/manduara.dev/quiz.html?curso=2&etapa=1) |
| 2° Curso · Etapa 2: independencias y economía | [Jugar](https://vecs0.github.io/manduara.dev/quiz.html?curso=2&etapa=2) |
| 3° Curso · Etapa 1: partidos y movimientos sociales | [Jugar](https://vecs0.github.io/manduara.dev/quiz.html?curso=3&etapa=1) |
| 3° Curso · Etapa 2: Paraguay contemporáneo | [Jugar](https://vecs0.github.io/manduara.dev/quiz.html?curso=3&etapa=2) |

## <img src="docs/icons/funcionalidades.svg" width="22" align="top" alt=""> Funcionalidades

- **6 niveles y 119 preguntas** organizadas por curso y etapa.
- **Orden aleatorio** de preguntas y opciones en cada partida.
- **Ayuda contextual** con pista e imagen. El botón aparece solo si la pregunta tiene ayuda.
- **Feedback inmediato**: marca la respuesta correcta y la elegida.
- **Progreso y puntaje** en tiempo real.
- **Resultado final** con porcentaje y opción de reintentar o cambiar de nivel.
- **Atajos de teclado**: `1`–`4` para responder, `A` para la ayuda.
- **Diseño responsive** y opciones accesibles con teclado.

## <img src="docs/icons/capturas.svg" width="22" align="top" alt=""> Capturas

| Elegir nivel | Pregunta |
|---|---|
| ![Selección de niveles](docs/screenshots/niveles.webp) | ![Pantalla de pregunta](docs/screenshots/quiz.webp) |
| **Ayuda con imagen** | **Respuesta** |
| ![Ventana de ayuda](docs/screenshots/ayuda.webp) | ![Feedback de respuesta](docs/screenshots/respuesta.webp) |
| **Resultado final** | **Versión móvil** |
| ![Resultado del juego](docs/screenshots/resultado.webp) | <img src="docs/screenshots/movil-quiz.webp" alt="Quiz en celular" width="200"> <img src="docs/screenshots/movil-portada.webp" alt="Portada en celular" width="200"> |

## <img src="docs/icons/tecnologias.svg" width="22" align="top" alt=""> Tecnologías

| Tecnología | Uso |
|---|---|
| **HTML5 · CSS3 · JavaScript (ES6+)** | Base del proyecto, sin frameworks ni proceso de build |
| **[Bootstrap 5](https://getbootstrap.com/) + Bootstrap Icons** | Layout responsive, navegación e íconos |
| **[SweetAlert2](https://sweetalert2.github.io/)** | Ventanas de feedback, ayuda y resultado |
| **GitHub Pages** | Hosting y despliegue |

## <img src="docs/icons/estructura.svg" width="22" align="top" alt=""> Estructura

```
manduara.dev/
├── index.html              # Portada y selección de niveles
├── quiz.html               # Página del juego (?curso=N&etapa=M)
├── assets/
│   ├── css/main.css        # Estilos propios
│   ├── js/niveles.js       # Catálogo de cursos, etapas y temas
│   ├── js/quiz.js          # Lógica del juego
│   └── img/                # Logo, fondos e imágenes de ayuda (WebP)
├── data/
│   └── curso-N-etapa-M.js  # Bancos de preguntas
├── docs/                   # Capturas e íconos del README
└── v1/                     # Versión original de 2023 (solo lectura)
```

Una sola página (`quiz.html`) sirve los 6 niveles: lee `curso` y `etapa` de la URL y carga el banco de preguntas que corresponde.

## <img src="docs/icons/local.svg" width="22" align="top" alt=""> Correr en local

```bash
git clone https://github.com/vecs0/manduara.dev.git
cd manduara.dev
python -m http.server 8000
```

Después abrí http://localhost:8000. También funciona abriendo `index.html` directamente.

## <img src="docs/icons/preguntas.svg" width="22" align="top" alt=""> Agregar preguntas

Cada banco en `data/` es una lista de objetos:

```js
{
  pregunta: "¿Cuál es la cuna del Renacimiento?",
  respuesta: "Italia",
  distractores: ["Francia", "España", "Inglaterra"],
  ayuda: "Texto de pista (opcional)",
  ayudaImg: "assets/img/preguntas/italia.webp" // opcional
}
```

## <img src="docs/icons/versiones.svg" width="22" align="top" alt=""> Versiones

| Versión | Estado | Enlace |
|---|---|---|
| **v2 (2026)** | Actual | [vecs0.github.io/manduara.dev](https://vecs0.github.io/manduara.dev/) |
| **v1 (2023)** | Archivada, se conserva tal como era | [vecs0.github.io/manduara.dev/v1](https://vecs0.github.io/manduara.dev/v1/) |

| Versión 1 (2023) | Versión 2 (2026) |
|---|---|
| ![Versión 1](docs/screenshots/v1-quiz.webp) | ![Versión 2](docs/screenshots/quiz.webp) |

## <img src="docs/icons/historial.svg" width="22" align="top" alt=""> Historial del proyecto

**v1 · 2023: primera versión**
- Quiz con 6 niveles, cada uno con su propia página HTML y hoja de estilos.

**v2 · 2026: refactor completo**
- Una sola página de juego en lugar de 6 páginas duplicadas.
- Nueva portada con tarjetas de nivel.
- Imágenes optimizadas a WebP: de 9.5 MB a 2.4 MB.
- Corrección de preguntas con la respuesta duplicada entre los distractores y de opciones vacías.
- Accesibilidad, atajos de teclado y diseño responsive.
- La v1 se conserva en `/v1` como referencia.

## <img src="docs/icons/autor.svg" width="22" align="top" alt=""> Autor

<table>
  <tr>
    <td><img src="https://github.com/vecs0.png" width="80" alt="Foto de perfil de vecs0"></td>
    <td>
      <strong>Victor Emmanuel Cabrera Sosa</strong><br>
      <a href="https://github.com/vecs0">vecs0 · github.com/vecs0</a>
    </td>
  </tr>
</table>

## <img src="docs/icons/licencia.svg" width="22" align="top" alt=""> Licencia

Distribuido bajo la licencia **MIT**. Consultá el archivo [LICENSE](LICENSE) para el texto completo.

| Permisos | Condiciones | Limitaciones |
|---|---|---|
| ✔ Uso comercial<br>✔ Modificación<br>✔ Distribución<br>✔ Uso privado | Incluir el aviso de copyright y la licencia | ✖ Sin garantía<br>✖ Sin responsabilidad |

**Contenido de terceros:** Bootstrap, Bootstrap Icons y SweetAlert2 se distribuyen bajo sus propias licencias MIT. Las imágenes históricas pertenecen a sus respectivos autores, se usan con fines educativos y no están cubiertas por esta licencia.

© 2023 Victor Emmanuel Cabrera Sosa
