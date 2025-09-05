import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-3 md:px-4 text-center">
        <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-12 shadow-medium border-2 border-success-green/20">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Shield className="w-8 h-8 md:w-12 md:h-12 text-white" />
          </div>
          
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-night-blue mb-4 md:mb-6 px-2">
            Risco Absolutamente Zero
          </h2>
          
          <div className="bg-success-green/10 rounded-lg md:rounded-xl p-4 md:p-8 mb-4 md:mb-6">
            <p className="font-heading text-lg md:text-2xl font-bold text-success-green mb-2 md:mb-4 px-2">
              GARANTIA INCONDICIONAL DE 30 DIAS
            </p>
          </div>
          
          <p className="font-body text-base md:text-lg text-foreground leading-relaxed max-w-2xl mx-auto px-2">
            Assista ao curso, aplique o método. Se em 30 dias você não sentir que este é o caminho para noites mais tranquilas, eu devolvo <strong className="text-night-blue">100% do seu investimento</strong> com um único clique.
          </p>
          
          <p className="font-body text-lg md:text-xl font-semibold text-night-blue mt-4 md:mt-6 px-2">
            O risco é todo meu. A transformação é toda sua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;