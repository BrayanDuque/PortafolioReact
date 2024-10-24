import React from 'react'
import { Github, Linkedin, DownloadIcon  } from 'lucide-react'
export const Info = () => {
    const pdfUrl = "../../../public/HV-BrayanDuque.pdf"
  return (
    // Contenedor para la información del desarrollador
    <div className='bg-fondoPerfil py-7 h-screen grid justify-center'>
       <section className='grid grid-cols-1 content-center lg:flex md:justify-center md:items-center gap-12 px-20'>
            <img src="https://cv-programador.vercel.app/assets/imagenes/file.jpg" alt="perfil" className='rounded-full w-9/12  mx-auto ' />
            <div className='px-4 md:px-16'>
                    <h2 className='text-5xl font-bold text-white pt-5 pb-1'>Brayan Duque</h2>
                    <p className='uppercase tracking-widest text-pink-500 pb-5'>Developer Frontend</p>
                    <p className='text-sm sm:text-xl text-gray-300 '>Desarrollador Frontend con pasión por crear interfaces de usuario intuitivas y eficientes. Experiencia en HTML, CSS, JavaScript, Figma, React y Angular. Habilidades demostradas en la creación desitios web responsive y en la colaboración efectiva en equipos ágiles. Comprometido con el aprendizaje continuo y la mejora de habilidades técnicas.</p>
            </div>
       </section>
       <div className='flex justify-center pt-2 gap-10 '>
            <a href="https://github.com/BrayanDuque" target='_blank'>
                <Github color='white' size={48}/>
            </a>
            <a href="https://www.linkedin.com/in/brduque/" target='_blank'>
                <Linkedin strokeWidth={1.25} color='white' size={48} />
            </a>
            
                {/* //  */}
                
            <a href={pdfUrl} download>
                <DownloadIcon className='text-white' size={48} />
            </a>
       </div>
    </div>
    
  )
}

export default Info;