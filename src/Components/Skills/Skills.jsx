import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaUsers,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";

const iconMap = {
  HTML: <FaCode className="text-orange-400" />,
  CSS: <FaPaintBrush className="text-blue-400" />,
  JavaScript: <FaRocket className="text-yellow-500" />,
  Tailwind: <FaPaintBrush className="text-teal-400" />,
  Bootstrap: <FaPaintBrush className="text-purple-400" />,
  React: <FaReact className="text-cyan-500" />,
  Git: <FaGitAlt className="text-red-400" />,
  Scrum: <FaUsers className="text-green-400" />,
  Figma: <FaFigma className="text-pink-400" />,
  "node.js": <FaNodeJs className="text-green-600" />,
  Express: <FaNodeJs className="text-gray-600" />,
  "base de datos": <FaDatabase className="text-blue-700" />,
};

export const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description: "Estructuración semántica de contenido web",
      level: "Avanzado",
    },
    {
      name: "CSS",
      description: "Estilización y diseño de interfaces",
      level: "Avanzado",
    },
    {
      name: "JavaScript",
      description: "Programación dinámica del lado del cliente",
      level: "Intermedio",
    },
    {
      name: "Tailwind",
      description: "Framework CSS utilitario para diseño rápido",
      level: "Avanzado",
    },
    {
      name: "Bootstrap",
      description: "Framework CSS para desarrollo responsivo",
      level: "Avanzado",
    },
    {
      name: "React",
      description: "Biblioteca JS para interfaces interactivas",
      level: "Intermedio",
    },
    {
      name: "Git",
      description: "Control de versiones ",
      level: "Intermedio",
    },
    {
      name: "Scrum",
      description: "Metodología ágil para gestión de proyectos",
      level: "Intermedio",
    },
    {
      name: "Figma",
      description: "Diseño de interfaces y prototipos",
      level: "Intermedio",
    },
    {
      name: "node.js",
      description: "Entorno de ejecución para JavaScript del lado del servidor",
      level: "Básico",
    },
    {
      name: "Express",
      description: "Framework web para Node.js",
      level: "Básico",
    },
    {
      name: "base de datos",
      description: "Conocimiento básico en bases de datos SQL y NoSQL",
      level: "Básico",
    },
  ];

  const borderColor = (level) =>
    level === "Avanzado"
      ? "border-green-400"
      : level === "Intermedio"
      ? "border-yellow-400"
      : "border-blue-300";

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 drop-shadow-lg">
        Habilidades Técnicas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg border-2 ${borderColor(
              skill.level
            )} bg-white flex flex-col items-center p-7 transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <span className="mb-4 text-3xl">
              {iconMap[skill.name] || <FaCode className="text-gray-400" />}
            </span>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {skill.name}
            </h3>
            <p className="text-gray-600 mb-4 text-center text-sm">
              {skill.description}
            </p>
            <span
              className={`px-4 py-1 rounded-full text-xs font-bold shadow-sm ${
                skill.level === "Avanzado"
                  ? "bg-green-100 text-green-700"
                  : skill.level === "Intermedio"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
