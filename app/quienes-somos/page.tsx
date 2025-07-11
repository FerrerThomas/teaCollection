import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Quiénes Somos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una historia de pasión por el té y compromiso con la calidad natural
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Tea Collection nació de una pasión profunda por los sabores auténticos y los beneficios naturales del té.
              Fundada en 2018, nuestra empresa comenzó como un pequeño emprendimiento familiar con la misión de acercar
              a las personas los mejores tés en hierbas del mundo.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Viajamos por diferentes regiones del mundo, desde las montañas del Himalaya hasta los campos de Sudáfrica,
              estableciendo relaciones directas con productores locales que comparten nuestros valores de sostenibilidad
              y calidad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cada té en nuestra colección es cuidadosamente seleccionado, probado y aprobado por nuestro equipo de
              expertos, garantizando que cada taza ofrezca una experiencia única y memorable.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/local.png?height=500&width=600"
              alt="Plantación de té en las montañas"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">Nuestra Misión</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Calidad Natural</h3>
              <p className="text-gray-600">
                Seleccionamos solo los mejores ingredientes naturales, libres de químicos y aditivos artificiales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Comercio Justo</h3>
              <p className="text-gray-600">
                Trabajamos directamente con productores, asegurando precios justos y prácticas sostenibles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Bienestar</h3>
              <p className="text-gray-600">
                Promovemos el bienestar a través de productos que nutren el cuerpo y calman el alma.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Nuestro Compromiso</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En Tea Collection, no solo vendemos té; compartimos una filosofía de vida que valora la tranquilidad, la
            salud y la conexión con la naturaleza. Cada producto que ofrecemos es el resultado de años de experiencia,
            investigación y un amor genuino por esta antigua tradición que une culturas de todo el mundo.
          </p>
        </div>
      </div>
    </div>
  )
}
