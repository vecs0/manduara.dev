// Catálogo de cursos y etapas. Cada etapa carga su banco desde data/curso-N-etapa-M.js
window.NIVELES = [
  {
    curso: 1,
    nombre: "Primer Curso",
    fondo: "assets/img/fondos/curso-1.webp",
    etapas: [
      { etapa: 1, titulo: "Del mundo clásico a la Edad Moderna", temas: ["Grecia y Roma", "Renacimiento", "Reforma", "Absolutismo", "Revolución Francesa"] },
      { etapa: 2, titulo: "Historia del Paraguay", temas: ["Conquista y colonia", "Independencia 1811", "Guerra Grande", "Guerra del Chaco"] },
    ],
  },
  {
    curso: 2,
    nombre: "Segundo Curso",
    fondo: "assets/img/fondos/curso-2.webp",
    etapas: [
      { etapa: 1, titulo: "Revoluciones y guerras mundiales", temas: ["Revolución Industrial", "Revolución Rusa", "I Guerra Mundial", "II Guerra Mundial"] },
      { etapa: 2, titulo: "Independencias y economía", temas: ["Independencias americanas", "Liberalismo", "Neoliberalismo", "Recursos y población"] },
    ],
  },
  {
    curso: 3,
    nombre: "Tercer Curso",
    fondo: "assets/img/fondos/curso-3.webp",
    etapas: [
      { etapa: 1, titulo: "Paraguay: partidos y movimientos sociales", temas: ["Partidos tradicionales", "Hegemonía Liberal", "Feminismo", "Movimientos sociales"] },
      { etapa: 2, titulo: "Paraguay contemporáneo y calidad de vida", temas: ["Transición democrática", "Constitución", "Desarrollo humano", "Regiones de América"] },
    ],
  },
];

window.buscarNivel = function (curso, etapa) {
  const c = window.NIVELES.find((n) => n.curso === curso);
  const e = c && c.etapas.find((x) => x.etapa === etapa);
  return c && e ? { ...c, ...e } : null;
};
