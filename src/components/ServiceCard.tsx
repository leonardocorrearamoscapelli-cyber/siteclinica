import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  const phoneNumber = "5511999999999";
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço do Residencial Santista: ${title}`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-card card-hover border border-border/50">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-5">
        {description}
      </p>
      
      <Button
        variant="outline"
        size="sm"
        className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground group"
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
        Quero saber mais
      </Button>
    </div>
  );
};

export default ServiceCard;
