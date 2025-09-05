import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Um método passo a passo para fazer seu bebê dormir no berço",
    "A liberdade de ter horas de sono contínuo para recarregar suas energias",
    "A confiança para lidar com saltos de desenvolvimento e regressões sem desespero",
    "O fim da culpa e da exaustão, dando lugar a uma maternidade mais leve e feliz"
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-night-blue mb-4 md:mb-6 leading-tight px-2">
            A decisão que vai devolver sua energia e a harmonia da sua casa
          </h2>
        </div>

        <div className="grid gap-4 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-card rounded-lg md:rounded-xl shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-success-green rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;