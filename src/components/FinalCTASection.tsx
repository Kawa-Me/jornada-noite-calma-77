import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-night text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container max-w-4xl mx-auto px-3 md:px-4 text-center relative z-10">
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-golden-yellow text-night-blue-dark px-4 py-2 md:px-6 md:py-3 rounded-full font-body font-bold mb-4 md:mb-6 text-sm md:text-base">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            ÚLTIMA CHAMADA
          </div>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
          A escolha é sua, mas o tempo está acabando
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 md:mb-8">
          <p className="font-body text-lg md:text-xl leading-relaxed mb-4 md:mb-6 px-2">
            A próxima vez que você acordar de madrugada, exausta, lembre-se que a solução estava a um clique de distância.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6 px-2">
            <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-golden-yellow flex-shrink-0" />
            <p className="font-body text-base md:text-lg font-semibold text-golden-yellow">
              Esta página e a oferta especial sairão do ar em breve
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <Button 
            variant="cta" 
            size="xl" 
            className="text-base md:text-xl px-6 md:px-16 py-4 md:py-4 h-auto w-full md:w-auto leading-tight font-bold"
            asChild
          >
            <a href="https://pay.cakto.com.br/39ivm65_537219" target="_blank" rel="noopener noreferrer">
              EU DECIDO MUDAR MINHAS NOITES AGORA
            </a>
          </Button>
          
          <p className="font-body text-white/80 text-xs md:text-sm px-2">
            🔒 Pagamento 100% seguro • ⚡ Acesso imediato • 🛡️ Garantia de 7 dias
          </p>
        </div>

        {/* Urgency elements */}
        <div className="mt-8 md:mt-12 grid sm:grid-cols-3 gap-3 md:gap-6 text-center">
          <div className="bg-white/5 rounded-lg p-3 md:p-4">
            <p className="font-heading text-xl md:text-2xl font-bold text-golden-yellow">+500</p>
            <p className="font-body text-xs md:text-sm text-white/80">Mães já transformaram suas noites</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 md:p-4">
            <p className="font-heading text-xl md:text-2xl font-bold text-golden-yellow">7 dias</p>
            <p className="font-body text-xs md:text-sm text-white/80">Garantia incondicional</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 md:p-4">
            <p className="font-heading text-xl md:text-2xl font-bold text-golden-yellow">Vitalício</p>
            <p className="font-body text-xs md:text-sm text-white/80">Acesso para sempre</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;