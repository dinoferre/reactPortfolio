import project1 from "../assets/projects/MBH.png";
import project2 from "../assets/projects/Meteoro.png";
import project3 from "../assets/projects/Memory-game.jpg";
import project4 from "../assets/projects/E-commerce.png";
import project5 from "../assets/projects/todoList.png";
import project6 from "../assets/projects/Encriptador.png";
import certification1 from "../assets/certifications/certificacion1.jpg";
import certification2 from "../assets/certifications/certificacion2.jpg";
import certification3 from "../assets/certifications/certificacion3.png";

export const ABOUT_TEXT = `He explorado diversas áreas profesionales, desde roles administrativos hasta atención al cliente. También sigo aprendiendo y participando en cursos y proyectos de programación, desarrollo de videojuegos, experiencias AR/VR y blockchain. He completado cursos de programación Full Stack en Argentina Programa y Oracle Next Education (Alura Latam). Mi experiencia laboral ha fortalecido mis habilidades interpersonales, como el trabajo colaborativo, la gestión de conflictos y la empatía, esenciales para establecer relaciones sólidas con colegas y clientes. Hace más de 2 años estudio pogramación y hace más de 1 año trabajo como backend con base de datos para el sistema nacional GDE.`;

export const CERTIFICATIONS = [
  {
    title: "Unity - UTN/BA",
    image: certification1,
    description:
      "El objetivo de este curso fue adquirir conocimientos en el diseño y comprender el proceso completo de producción de un videojuego, desde la concepción inicial y la preproducción hasta el desarrollo y mantenimiento final. Los objetivos específicos incluyen la capacidad de desarrollar aplicaciones de videojuegos para dispositivos móviles y dominar la programación e interactividad en Unity 3D y Blender.",
    technologies: ["Unity", "Blender", "C#", "Unity-Play"],
    deploy: "https://drive.google.com/file/d/1soGUd_AfXZ6kQVvF1My4HOE6T-qwOdCq/view"
  },
  {
    title: "ONE Alura Latam (ORACLE)",
    image: certification2,
    description:
      "El programa ONE comienza con la enseñanza de la lógica de programación y el desarrollo personal, enfocándose en el cambio de mentalidad y habilidades de comunicación. Luego, se especializa en Front-End con React y JavaScript y en el Back-End, Java y Spring Framework para optimizar el desarrollo de aplicaciones orientadas a objetos.",
    technologies: ["Unity", "Blender", "C#", "Unity-Play"],
    deploy: "https://app.aluracursos.com/program/certificate/e41f2042-c3c1-4433-93f6-126c845f13fb"
  },
  {
    title: "Argentina Programa",
    image: certification3,
    description:
      "Comenzando con Java, se enfocó en la Programación Orientada a Objetos. Se promovió la resolución de problemas mediante ejercicios graduales, cubriendo desde estructuras de datos hasta el manejo de excepciones y colecciones dentro de la API de Java. También se exploran algoritmos fundamentales, complejidad computacional y estrategias de resolución de problemas.",
    technologies: ["Unity", "Blender", "C#", "Unity-Play"],
    deploy: "https://drive.google.com/file/d/1BzQo6yb8YnZYVbtx54uvH8fyFHQANS5x/view?usp=sharing"
  },
]

export const PROJECTS = [
  {
    title: "MysticalBottleHunter",
    image: project1,
    description:
      "Desarrollado con Unity y Blender y desplegado en UnityPlay, un juego en el que controlas un personaje capaz de desplazarse, saltar y sortear obstáculos con colisiones y gravedad realista. El objetivo es recolectar botellas distribuidas por un mundo 3D.",
    technologies: ["Unity", "Blender", "C#", "Unity-Play"],
    github: "https://github.com/dinoferre/MysticalBottleHunter",
    deploy: "https://play.unity.com/mg/other/mystical-bottle-hunter"
  },
  {
    title: "Meteor|Dino",
    image: project2,
    description:
      "Este proyecto del Metaverso utiliza la tecnología de A-Frame para crear una experiencia interactiva en 3D. Está compuesto por un archivo HTML y JavaScript que trabajan en conjunto para renderizar una escena en la que se pueden disparar meteoritos, usando un caso VR.",
    technologies: ["HTML", "JavaScript", "A-Frame"],
    github: "https://github.com/dinoferre/Meteoro-Dino-Aframe",
    deploy: "https://dinoferre.github.io/Meteoro-Dino-Aframe"
  },
  {
    title: "Memory Game",
    image: project3,
    description:
      "Página web interactiva en la que el usuario debe hacer clic en las cartas para encontrar las parejas. El juego incluye un temporizador de cuenta regresiva y un contador de movimientos para agregar emoción y desafío al juego.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dinoferre/Juego-De-Memoria",
    deploy: "https://dinoferre.github.io/Juego-De-Memoria"
  },
  {
    title: "E-Commerce",
    image: project4,
    description:
      "La página cuenta con una sección de encabezado y una barra de navegación con una lista de categorías de productos y un enlace al carrito de compras. El contenido principal de la página se encuentra en la sección del cuerpo, la cual contiene un título principal y un contenedor de productos que se llenará con JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dinoferre/Ecommerce-Dino",
    deploy: "https://dinoferre.github.io/Ecommerce-Dino/index.html"
  },
  {
    title: "ToDo List",
    image: project5,
    description:
      "Listado de tareas donde el usuario puede colocar la tarea que desea realizar, marcarla con un tilde y luego borrarla. Todo esto almacenando los datos en el localStorage del usuario.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dinoferre/Lista-De-Tareas",
    deploy: "https://dinoferre.github.io/Lista-De-Tareas"
  },
  {
    title: "Encriptador",
    image: project6,
    description:
      "La página web tiene campos para insertar el texto que se va a encriptar o desencriptar, y el usuario puede elegir entre las dos opciones. El resultado se muestra en la pantalla mediante manipulación del DOM con JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/dinoferre/Encriptador",
    deploy: "https://dinoferre.github.io/Encriptador"
  },
];

