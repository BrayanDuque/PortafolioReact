
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
    ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Mis Habilidades de Desarrollo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                skill.level === "Avanzado" ? "bg-green-100 text-green-800" :
                skill.level === "Intermedio" ? "bg-yellow-100 text-yellow-800" :
                "bg-gray-100 text-gray-800"
              }`}>
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills