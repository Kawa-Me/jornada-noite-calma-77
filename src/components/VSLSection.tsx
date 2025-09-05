import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const VSLSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Main Headline */}
        <h1 className="font-heading text-xl font-bold text-white mb-3 leading-tight">
          Mãe, assista a este vídeo antes que saia do ar
        </h1>
        
        <p className="text-base text-white/90 mb-6 font-body">
          É o seu primeiro passo para <span className="text-golden-yellow font-semibold">noites de sono tranquilas</span>
        </p>

        {/* Video Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-4 shadow-strong">
          <div className="aspect-video bg-night-blue-dark rounded-lg mb-3 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/F2jdlRbmnIg"
              title="Jornada Harmonia Noturna - Vídeo de Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          
          <p className="text-white/80 text-xs mb-4 font-body leading-relaxed">
            Som recomendado. As informações deste vídeo podem transformar a forma como você enxerga a maternidade e o sono do seu filho.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="xl" 
            className="mb-3 animate-pulse hover:animate-none w-full text-sm py-4 font-bold"
            asChild
          >
            <a href="https://pay.cakto.com.br/39ivm65_537219" target="_blank" rel="noopener noreferrer">
              QUERO MINHAS NOITES DE VOLTA
            </a>
          </Button>
          
          <p className="text-golden-yellow-light text-xs font-semibold">
            ⚡ Oferta especial de lançamento apresentada no vídeo encerra hoje!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;