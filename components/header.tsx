import { Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-accent" />
            <h1 className="font-serif text-xl font-semibold text-foreground">Vitrina digital</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-foreground hover:text-accent transition-colors">
              Inicio
            </a>
            <a href="#negocios" className="text-foreground hover:text-accent transition-colors">
              Negocios
            </a>
            <a href="#contacto" className="text-foreground hover:text-accent transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
