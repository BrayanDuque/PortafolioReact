import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaUsers,
  FaFigma,
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
  ];

  const borderColor = (level) =>
    level === "Avanzado"
      ? "border-green-300"
      : level === "Intermedio"
      ? "border-yellow-300"
      : "border-gray-300";

  const bgColor = "bg-white";

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Habilidades Técnicas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-sm border ${borderColor(
              skill.level
            )} ${bgColor} flex flex-col items-center p-5 transition-shadow hover:shadow-md`}
          >
            <span className="mb-3 text-2xl">
              {iconMap[skill.name] || <FaCode className="text-gray-400" />}
            </span>
            <h3 className="text-lg font-medium mb-1 text-gray-900">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3 text-center">
              {skill.description}
            </p>
            <span
              className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                skill.level === "Avanzado"
                  ? "bg-green-100 text-green-700"
                  : skill.level === "Intermedio"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-100 text-gray-700"
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
