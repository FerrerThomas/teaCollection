export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  benefits: string[]
  ingredients: string[]
}

export const products: Product[] = [
  {
    id: "te-verde-jazmin",
    name: "Té Verde con Jazmín",
    price: 1250,
    image: "/teverde.png?height=400&width=400",
    description:
      "Un delicado té verde perfumado con flores de jazmín, que ofrece un aroma floral exquisito y un sabor suave y refrescante. Ideal para momentos de relajación y meditación.",
    benefits: ["Rico en antioxidantes", "Ayuda a la relajación", "Mejora la concentración"],
    ingredients: ["Té verde", "Flores de jazmín", "Pétalos naturales"],
  },
  {
    id: "manzanilla-miel",
    name: "Manzanilla con Miel",
    price: 980,
    image: "/terojo.png?height=400&width=400",
    description:
      "Una mezcla reconfortante de manzanilla pura con un toque natural de miel. Perfecto para relajarse antes de dormir y calmar el sistema digestivo.",
    benefits: ["Propiedades calmantes", "Ayuda a la digestión", "Favorece el sueño"],
    ingredients: ["Flores de manzanilla", "Miel natural", "Pétalos de caléndula"],
  },
  {
    id: "rooibos-vainilla",
    name: "Rooibos con Vainilla",
    price: 1150,
    image: "/teamarillo.png?height=400&width=400",
    description:
      "Un té rooibos sudafricano naturalmente libre de cafeína, enriquecido con esencia de vainilla. Dulce, cremoso y perfecto para cualquier momento del día.",
    benefits: ["Sin cafeína", "Rico en minerales", "Sabor naturalmente dulce"],
    ingredients: ["Rooibos rojo", "Esencia de vainilla", "Trozos de vainilla"],
  },
  {
    id: "hibisco-frutas",
    name: "Hibisco con Frutas",
    price: 1080,
    image: "/tevioleta.png?height=400&width=400",
    description:
      "Una vibrante mezcla de hibisco con trozos de frutas deshidratadas. Rico en vitamina C, con un sabor ácido y refrescante que se puede disfrutar caliente o frío.",
    benefits: ["Alto en vitamina C", "Propiedades antioxidantes", "Refrescante"],
    ingredients: ["Flores de hibisco", "Trozos de manzana", "Frutas del bosque", "Cáscara de naranja"],
  },
  {
    id: "te-chai-especias",
    name: "Té Chai con Especias",
    price: 1350,
    image: "/tenegro.png?height=400&width=400",
    description:
      "Una mezcla tradicional de té negro con especias aromáticas como canela, cardamomo, jengibre y clavo. Un sabor intenso y especiado que despierta los sentidos.",
    benefits: ["Estimulante natural", "Propiedades digestivas", "Rico en antioxidantes"],
    ingredients: ["Té negro", "Canela", "Cardamomo", "Jengibre", "Clavo de olor", "Pimienta negra"],
  },
  {
    id: "te-blanco-petalos",
    name: "Té Blanco con Pétalos",
    price: 1450,
    image: "/teblanco.png?height=400&width=400",
    description:
      "El más delicado de nuestros tés, elaborado con brotes jóvenes y pétalos de rosa. Un sabor sutil y elegante con propiedades antioxidantes excepcionales.",
    benefits: ["Máximo contenido de antioxidantes", "Sabor delicado", "Propiedades anti-edad"],
    ingredients: ["Té blanco premium", "Pétalos de rosa", "Brotes tiernos"],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4)
}
