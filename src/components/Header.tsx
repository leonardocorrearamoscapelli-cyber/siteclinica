import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#inicio"); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-semibold text-foreground">Residencial Santista</span>
              <span className="block text-xs text-muted-foreground -mt-1">Cuidados com Idosos</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços do Residencial Santista.", "_blank")}
              className="bg-primary hover:bg-primary/90"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços do Residencial Santista.", "_blank")}
                className="bg-primary hover:bg-primary/90 w-full mt-2"
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
