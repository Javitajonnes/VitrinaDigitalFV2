"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MessageCircle } from "lucide-react"
import Image from "next/image"

interface BusinessCardProps {
  name: string
  description: string
  hours: string
  whatsappNumber: string
  image: string // agregando parámetro de imagen
  whatsappMessage?: string
}

export function BusinessCard({
  name,
  description,
  hours,
  whatsappNumber,
  image, // agregando imagen a los props
  whatsappMessage = "Hola, me interesa conocer más sobre sus servicios",
}: BusinessCardProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Imagen de ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-serif text-xl text-card-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-sm text-secondary">
          <Clock className="h-4 w-4" />
          <span>{hours}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleWhatsAppClick} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <MessageCircle className="h-4 w-4 mr-2" />
          Contactar por WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}
