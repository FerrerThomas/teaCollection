import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Nuestros Productos</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestra colección completa de tés en hierbas premium. Cada producto es seleccionado cuidadosamente
            para ofrecerte la mejor experiencia de sabor y bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
