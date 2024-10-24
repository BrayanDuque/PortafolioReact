import {useState, FormEvent, React} from 'react'

export const Contacto = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Formulario enviado:", formData)
        alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
        setFormData({ name: "", email: "", message: "" })
      }
    
  return (
    <div className="max-w-md mx-auto p-8 mb-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl shadow-lg md:max-w-2xl">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contáctame</h2>
    <form action="https://formspree.io/f/mrgnwqag" method="POST" onSubmit={handleSubmit} className="space-y-6">
      {["name", "email", "message"].map((field) => (
        <div key={field} className="relative">
          <input
            type={field === "email" ? "email" : "text"}
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
            placeholder=" "
            className={`
              block w-full px-4 py-3 text-gray-700 bg-white border rounded-md
              focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40
              transition duration-200
              ${field === "message" ? "h-32" : ""}
            `}
          />
          <label
            htmlFor={field}
            className={`
              absolute left-4 ${field === "message" ? "-top-6" : "top-3"}
              text-gray-600 text-sm transition-all duration-200
              ${formData[field] ? "-top-6" : ""}
            `}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
        </div>
      ))}
      <button
        type="submit"
        className="w-full px-4 py-3 text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-105"
      >
        Enviar mensaje
      </button>
    </form>
  </div>
  )
}

export default Contacto;