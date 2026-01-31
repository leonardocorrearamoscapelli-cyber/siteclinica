import { Heart, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-serif text-xl font-semibold">Residencial Santista</span>
                <span className="block text-xs text-primary-foreground/80 -mt-1">Cuidados com Idosos</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Cuidamos de quem você ama com dedicação, respeito e carinho. 
              Nossa missão é proporcionar qualidade de vida e bem-estar para 
              cada idoso que faz parte da nossa família.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">WhatsApp disponível</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">
                  Baixada Santista<br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Horário</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div className="text-primary-foreground/80">
                  <p>Segunda a Sexta</p>
                  <p className="font-medium">8h às 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary-foreground/70" />
                <div className="text-primary-foreground/80">
                  <p>Sábados</p>
                  <p className="font-medium">9h às 14h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Residencial Santista. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Cuidando com amor e dedicação.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
