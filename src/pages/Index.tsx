import { 
  Heart, 
  HeartHandshake, 
  Users, 
  Home,
  Shield,
  Star,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  HandHeart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  const phoneNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços do Residencial Santista.")}`;

  const services = [
    {
      icon: Heart,
      title: "Cuidados Diários",
      description: "Acompanhamento integral das atividades diárias, garantindo conforto, segurança e bem-estar em cada momento do dia."
    },
    {
      icon: HandHeart,
      title: "Cuidadores em Missão",
      description: "Equipe de cuidadores dedicados e capacitados, disponíveis para acompanhamento contínuo e atenção personalizada."
    },
    {
      icon: HeartHandshake,
      title: "Cuidados Especializados",
      description: "Suporte especializado para recuperação e bem-estar, com atenção personalizada e ambiente adequado."
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Tratamos cada idoso com respeito, carinho e dignidade, criando vínculos de confiança e afeto genuíno."
    },
    {
      icon: Home,
      title: "Apoio à Família",
      description: "Orientação e suporte aos familiares, mantendo comunicação constante sobre o bem-estar do seu ente querido."
    }
  ];

  const values = [
    { icon: Heart, text: "Cuidado com amor" },
    { icon: Shield, text: "Ambiente seguro" },
    { icon: Star, text: "Cuidadores qualificados" },
    { icon: Users, text: "Vínculo familiar" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section com Carrossel */}
      <section id="inicio" className="pt-16 md:pt-20">
        <HeroCarousel>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="animate-fade-up">
                <span className="inline-block px-4 py-1.5 rounded-full bg-background/20 backdrop-blur-sm text-background text-sm font-medium mb-6 border border-background/30">
                  Residencial para Idosos
                </span>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 drop-shadow-lg">
                  Cuidado, respeito e dignidade para{" "}
                  <span className="text-accent">quem você mais ama</span>
                </h1>
                
                <p className="text-lg md:text-xl text-background/90 leading-relaxed mb-8 max-w-2xl drop-shadow-md">
                  Somos um residencial especializado no cuidado integral de idosos, oferecendo 
                  atenção personalizada, segurança e bem-estar em todas as etapas da vida.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 group shadow-lg"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com o residencial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background/20"
                    onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Conhecer serviços
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="pt-6 border-t border-background/20">
                  <div className="flex flex-wrap gap-6">
                    {values.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-background/90">
                        <item.icon className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroCarousel>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif text-xl md:text-2xl text-primary-foreground font-medium">
            Aqui, o cuidado vai além do atendimento.{" "}
            <span className="opacity-90">Cuidamos como família.</span>
          </p>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 md:py-24 section-decorated">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Quem Somos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cuidado que nasce do coração
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nascemos da vontade de oferecer aos idosos um espaço onde eles se sintam 
              verdadeiramente acolhidos, respeitados e amados. Mais do que um residencial, 
              somos uma extensão da família.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 text-center card-hover">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Promover cuidados de saúde integral aos idosos com humanização e excelência.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 text-center card-hover">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecido na Baixada Santista pela qualidade e assistência aos idosos.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 text-center card-hover">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integridade, compaixão, relacionamento e inovação.
              </p>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mt-16 bg-secondary/50 rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
              Por que escolher o Residencial Santista?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Cuidadores qualificados e experientes",
                "Ambiente seguro e acolhedor",
                "Atendimento humanizado 24 horas",
                "Comunicação transparente com a família"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nossos Serviços
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cuidado completo para cada necessidade
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Oferecemos uma gama completa de serviços pensados para atender às 
              necessidades individuais de cada idoso, sempre com carinho e profissionalismo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Entre em Contato
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Estamos prontos para cuidar de quem você ama
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tire suas dúvidas, agende uma visita ou conheça melhor nossos serviços. 
              Nossa equipe de cuidadores está à disposição para atendê-lo com todo carinho.
            </p>
            
            <Button 
              size="lg" 
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all group"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Entrar em contato pelo WhatsApp
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Info cards */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                <p className="text-muted-foreground">(11) 99999-9999</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                <p className="text-muted-foreground">Baixada Santista - SP</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                <p className="text-muted-foreground">Seg-Sex: 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
