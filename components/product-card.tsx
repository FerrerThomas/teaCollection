import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  price: number
  image: string
  description?: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
          <Link href={`/productos/${product.id}`}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">Ver Detalle</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
