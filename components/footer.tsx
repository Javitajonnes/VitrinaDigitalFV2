import { Building2, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6" />
              <h3 className="font-serif text-lg font-semibold">Directorio Local</h3>
            </div>
            <p className="text-primary-foreground/80">Conectando pymes locales de vecinos para vecinos.</p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#negocios"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Negocios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>maria.puga08@inacapmail.cl</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+(56)981977426</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2025 Vitrina Digital.  By<a href="https://github.com/Javitajonnes" target="_blank"> @Javitajonnes </a>
    .</p>
        </div>
      </div>
    </footer>
  )
}
