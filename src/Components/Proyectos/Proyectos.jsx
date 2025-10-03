export const Proyectos = () => {
  const projects = [
    {
      title: "Nintendo Copy",
      description:
        "Plataforma de comercio inspirada en Nintendo, enfocada en publicidad.",
      technologies: ["HTML", "CSS", "Tailwind"],
      github: "https://brayanduque.github.io/Page-Nintendo/",
    },
    {
      title: "Cronometro",
      description:
        "Cronómetro básico con funciones de iniciar, pausar y reiniciar.",
      technologies: ["HTML", "Tailwind", "JavaScript", "React.js"],
      github: "https://cronometro-react-gamma.vercel.app/",
    },
    {
      title: "Rick and Morty",
      description:
        "App que muestra información de personajes de Rick and Morty consumiendo una API.",
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "React.js"],
      github: "https://rick-and-morty-one-orpin.vercel.app/",
    },
    {
      title: "Pendientes App",
      description:
        "Gestión de tareas con funcionalidades de añadir y eliminar en tiempo real.",
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "React.js"],
      github: "https://pendientes-react.vercel.app/",
    },
    {
      title: "Porcentaje De Resultados",
      description:
        "Dashboard estático que muestra promedios de resultados de pruebas.",
      technologies: ["HTML", "CSS", "Tailwind"],
      github: "https://brayanduque.github.io/mentor-1/",
    },
    {
      title: "Fylo",
      description:
        "Landing page empresarial estática con sugerencia de correo electrónico.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "https://brayanduque.github.io/fylo/",
    },
  ];

  return (
    <div className="px-4 py-16 bg-gradient-to-br from-indigo-900 via-slate-800 to-indigo-700 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-white mb-14 tracking-tight drop-shadow-lg">
        Mis Proyectos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-xl border-2 border-transparent hover:border-indigo-400 transition-all duration-300 flex flex-col h-full hover:scale-[1.03] hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #f8fafc 70%, #e0e7ff 100%)",
            }}
          >
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-base text-slate-600 mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold border border-indigo-100 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-indigo-50 px-7 py-4 border-t border-indigo-100 flex items-center justify-between">
              <span className="text-xs text-indigo-400 font-medium tracking-wide group-hover:text-indigo-600 transition-colors">
                Ver proyecto
              </span>
              <svg
                className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
