import { HeroCarousel } from "@/components/hero-carousel"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div>
      <HeroCarousel />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Productos Destacados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección especial de tés premium, cuidadosamente elegidos por su calidad excepcional y
              sabores únicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/productos">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
                La Experiencia del Té Natural
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En Tea Collection, creemos que cada taza de té es un momento especial. Nuestros tés en hierbas son
                cuidadosamente seleccionados de los mejores cultivos del mundo, garantizando pureza, frescura y sabores
                excepcionales.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Desde tés relajantes para la noche hasta energizantes para comenzar el día, tenemos la mezcla perfecta
                para cada momento de tu vida.
              </p>
              <Link href="/quienes-somos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-full bg-transparent"
                >
                  Conoce Nuestra Historia
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/local.png?height=500&width=600"
                alt="Tés naturales en ambiente relajante"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
