"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToBusinesses = () => {
    document.getElementById("negocios")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="bg-muted py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Emprendedores Fuentes de vilumanque 2
        </h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          Conecta con emprendimientos de nuestra comunidad de vecinos. Apoya el comercio local!.
        </p>
        <Button onClick={scrollToBusinesses} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Explorar Negocios
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
