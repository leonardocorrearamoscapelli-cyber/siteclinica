import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Placeholder images - substituir por fotos reais do residencial
import heroAmbiente from "@/assets/hero-ambiente-1.jpg";
import heroCuidado from "@/assets/hero-cuidado-2.jpg";
import heroJardim from "@/assets/hero-jardim-3.jpg";
import heroCaringHands from "@/assets/hero-caring-hands.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");

  // Array de imagens - fácil de atualizar com fotos reais
  const galleryImages = [
    { src: heroAmbiente, alt: "Ambiente acolhedor do Residencial Santista" },
    { src: heroCuidado, alt: "Cuidado personalizado com nossos idosos" },
    { src: heroJardim, alt: "Área externa com jardim" },
    { src: heroCaringHands, alt: "Cuidadores atenciosos" },
    { src: heroAmbiente, alt: "Espaço de convivência" },
    { src: heroCuidado, alt: "Momentos de carinho e atenção" },
  ];

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedAlt("");
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-12 md:pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Galeria de Fotos
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Conheça nosso espaço
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Conheça um pouco do nosso espaço, preparado com carinho para oferecer 
              conforto, segurança e bem-estar aos nossos idosos.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-soft hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(image.src, image.alt)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 rounded-full p-3">
                    <ZoomIn className="w-6 h-6 text-primary" />
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-background text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Quer conhecer nosso espaço pessoalmente?
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita ao Residencial Santista."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Agendar uma visita
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 bg-background/10 hover:bg-background/20 text-background rounded-full p-2 transition-colors z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt={selectedAlt}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-background/90 py-4 bg-gradient-to-t from-foreground/60 to-transparent rounded-b-lg">
              {selectedAlt}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
