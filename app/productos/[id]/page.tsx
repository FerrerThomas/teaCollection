import { notFound } from "next/navigation"
import Image from "next/image"
import { getProduct } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    notFound()
  }

  const whatsappMessage = `Hola, quiero consultar por el producto: ${product.name}`
  const whatsappUrl = `https://wa.me/2355506234?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">{product.name}</h1>

            <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Beneficios</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.benefits.map((benefit, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredientes</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
