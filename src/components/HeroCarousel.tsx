import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ===========================================
// IMAGENS DO CARROSSEL - FÁCIL ATUALIZAÇÃO
// Para trocar as imagens, basta:
// 1. Adicionar suas fotos na pasta src/assets/
// 2. Importar abaixo e adicionar ao array heroImages
// ===========================================

import heroImage1 from "@/assets/hero-caring-hands.jpg";
import heroImage2 from "@/assets/hero-ambiente-1.jpg";
import heroImage3 from "@/assets/hero-cuidado-2.jpg";
import heroImage4 from "@/assets/hero-jardim-3.jpg";

interface HeroImage {
  src: string;
  alt: string;
}

// Array de imagens - adicione ou remova imagens aqui
const heroImages: HeroImage[] = [
  { src: heroImage1, alt: "Cuidado acolhedor com idosos" },
  { src: heroImage2, alt: "Ambiente confortável do residencial" },
  { src: heroImage3, alt: "Cuidadores atendendo idosos" },
  { src: heroImage4, alt: "Jardim tranquilo do residencial" },
];

interface HeroCarouselProps {
  children: React.ReactNode;
}

const HeroCarousel = ({ children }: HeroCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Carrossel de imagens */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Overlay escuro para legibilidade do texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 h-full flex items-center">
        {children}
      </div>

      {/* Setas de navegação */}
      <button
        onClick={scrollPrev}
        className={cn(
          "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 md:w-12 md:h-12 rounded-full",
          "bg-background/20 backdrop-blur-sm border border-background/30",
          "flex items-center justify-center",
          "text-background hover:bg-background/30 transition-all duration-300",
          "opacity-70 hover:opacity-100"
        )}
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button
        onClick={scrollNext}
        className={cn(
          "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20",
          "w-10 h-10 md:w-12 md:h-12 rounded-full",
          "bg-background/20 backdrop-blur-sm border border-background/30",
          "flex items-center justify-center",
          "text-background hover:bg-background/30 transition-all duration-300",
          "opacity-70 hover:opacity-100"
        )}
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Indicadores (pontos) */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-background w-8 md:w-10"
                : "bg-background/50 hover:bg-background/70"
            )}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
