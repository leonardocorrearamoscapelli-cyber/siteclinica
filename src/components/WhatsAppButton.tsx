import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços do Residencial Solar Santista.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group min-h-[56px] min-w-[56px] sm:min-w-auto"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline font-medium">Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton;
