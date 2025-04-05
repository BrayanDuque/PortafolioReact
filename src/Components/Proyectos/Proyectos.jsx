import { section } from 'framer-motion/client';
import React, { useState } from 'react'


export const Proyectos = () => {
    // const projects = [
    //     { titulo : 'Nintendo Copy', description : 'Copia de la pagina de nintendo realizada con html y frameworks de css', url: ''},
    //     { titulo : 'Inicio y Registro', description : 'Modelo base para un login y registro con html y frameworks de css', url: '' },
    //     { titulo : 'Pendientes app', description : 'Sitio web para llevar un control de pendientes realizado con html, frameworks de css y Javascript', url: '' },
    //     { titulo : 'proyectos', description : 'lorem ipsum', url: ''},
    //     { titulo : 'proyectos', description : 'lorem ipsum', url: ''},
    //     { titulo : 'proyectos', description : 'lorem ipsum', url: ''},
    // ]
    const projects = [
      {
        title: "Nintendo Copy",
        description:
          "Una plataforma de comercio de nintendo, basada en publicidad.",
          technologies: ["Html", "Css", "Tailwind"],
          github: "https://brayanduque.github.io/Page-Nintendo/",
        },
        {
          title: "Cronometro",
          description:
          "Cronometro básico con funcionalidades de iniciar, pausar y reiniciar.",
          technologies: ["Html", "Tailwind", "Javascript", "React.js"],
          github: "https://cronometro-react-gamma.vercel.app/",
        },
      {
        title: "Porcentaje De Resultados",
        description:
        "Dashboard estático que muestra promedio de resultados de diferentes pruebas realizadas.",
        technologies: ["Html", "Css", "Tailwind"],
        github: "https://brayanduque.github.io/mentor-1/",
      },
      {
        title: "Pendientes App",
        description:
          "Aplicación de gestión de tareas con funcionalidades de añadir, eliminar, categorizar, y colaboración en tiempo real.",
        technologies: ["Javascript", "Angular", "Html", "Css", "Tailwind"],
        github: "https://pendientes-app-one.vercel.app/",
      },
      {
        title: "Galery Famous",
        description:
          "Landing pages de una galeria básica de seis famosos con sus respetivas obras de arte",
        technologies: ["Html", "Css", "Bootstrap"],
        github: "https://brayanduque.github.io/galery-famous/",
      },
      {
        title: "Fylo",
        description:
          "Landing pages de una pagina empresarial estática donde sugiere el correo electronico para poder continuar con el proceso.",
        technologies: ["Html", "Css", "Bootstrap"],
        github: "https://brayanduque.github.io/fylo/",
      },
    ];
  return (
    <div className=" px-4 py-16 bg-proyects">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <a key={index} href={project.github} target='_blank' className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl ">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>

  )
}



export default Proyectos;