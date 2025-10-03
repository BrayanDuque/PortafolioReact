import { Github, Linkedin, DownloadIcon } from "lucide-react";

export const Info = () => {
  const pdfUrl = "/HV-BrayanDuque.pdf";
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-700 py-16 grid justify-center">
      <section className="grid grid-cols-1 lg:flex md:justify-center md:items-center gap-12 px-8 md:px-20">
        <img
          src="https://cv-programador.vercel.app/assets/imagenes/file.jpg"
          alt="perfil"
          className="rounded-full w-9/12 mx-auto"
        />
        <div className="px-4 md:px-16 flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-white pt-5 pb-1 drop-shadow-lg">
            Brayan Duque
          </h2>
          <p className="uppercase tracking-widest text-pink-500 pb-5 font-semibold text-lg">
            Developer Frontend
          </p>
          <p className="text-base sm:text-xl text-gray-200 mb-4">
            Desarrollador web con experiencia en{" "}
            <span className="text-pink-400 font-semibold">
              HTML, CSS, JavaScript, React y Node.js
            </span>
            . Capaz de crear aplicaciones completas, desde el frontend
            responsive e interactivo hasta el backend con Node.js y Express.
            Apasionado por el aprendizaje continuo y la construcción de
            soluciones eficientes y centradas en el usuario.
          </p>
          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/BrayanDuque"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Github
                color="white"
                size={44}
                className="transition-transform group-hover:-translate-y-1 group-hover:text-pink-400"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/brduque/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Linkedin
                strokeWidth={1.5}
                color="white"
                size={44}
                className="transition-transform group-hover:-translate-y-1 group-hover:text-pink-400"
              />
            </a>
            <a href={pdfUrl} download className="group">
              <DownloadIcon
                className="text-white transition-transform group-hover:-translate-y-1 group-hover:text-pink-400"
                size={44}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
