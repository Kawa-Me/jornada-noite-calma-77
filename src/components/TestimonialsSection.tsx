import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      age: "32 anos",
      location: "São Paulo, SP",
      baby: "Mãe da Sofia (8 meses)",
      text: "Eu estava desesperada, acordando 6 vezes por noite há meses. Depois de aplicar o método, Sofia passou a dormir 8 horas seguidas em apenas 5 dias. Parece milagre, mas é pura ciência!",
      rating: 5
    },
    {
      name: "Amanda Costa",
      age: "28 anos", 
      location: "Rio de Janeiro, RJ",
      baby: "Mãe do Pedro (4 meses)",
      text: "Pensei que era normal não dormir. A Jornada me mostrou que meu filho também precisava aprender a dormir. Hoje durmo 7 horas por noite e me sinto uma mãe completamente nova.",
      rating: 5
    },
    {
      name: "Juliana Ferreira",
      age: "35 anos",
      location: "Belo Horizonte, MG", 
      baby: "Mãe da Laura (10 meses)",
      text: "Já havia tentado tudo que encontrava na internet. Este curso foi diferente - um método estruturado que realmente funciona. Laura dormiu a noite toda pela primeira vez ontem!",
      rating: 5
    },
    {
      name: "Camila Santos",
      age: "30 anos",
      location: "Porto Alegre, RS",
      baby: "Mãe do Lucas (6 meses)",
      text: "Estava com depressão pós-parto pela falta de sono. O curso não só resolveu o sono do Lucas, como me devolveu minha sanidade mental. Eternamente grata!",
      rating: 5
    },
    {
      name: "Rafaela Lima",
      age: "26 anos",
      location: "Fortaleza, CE",
      baby: "Mãe da Isadora (3 meses)",
      text: "Comprei no impulso, achando que seria mais do mesmo. Que engano! Em 3 dias Isadora já estava dormindo 4 horas seguidas. Hoje são 6 horas direto. Vale cada centavo!",
      rating: 5
    },
    {
      name: "Patrícia Oliveira",
      age: "33 anos",
      location: "Salvador, BA",
      baby: "Mãe do Miguel (7 meses)",
      text: "Meu marido já estava cogitando dormir no sofá. O curso salvou nosso relacionamento e nossa família. Miguel dorme das 20h às 6h da manhã. Vida nova!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-golden-yellow text-golden-yellow" />
    ));
  };

  return (
    <section className="py-12 md:py-20 bg-soft-cream">
      <div className="container max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-night-blue mb-4 md:mb-6 leading-tight px-2">
            Mais de 500 mães já transformaram suas noites
          </h2>
          <p className="font-body text-lg md:text-xl text-soft-gray-dark max-w-3xl mx-auto px-2">
            Veja o que essas mães corajosas têm a dizer sobre a transformação que viveram com a Jornada Harmonia Noturna
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 shadow-soft hover:shadow-strong transition-shadow duration-300"
            >
              <CardContent className="p-4 md:p-6 relative">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-golden-yellow/30 mb-3 md:mb-4" />
                
                <div className="flex mb-2 md:mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="font-body text-soft-gray-dark mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-soft-gray pt-3 md:pt-4">
                  <div className="font-body font-bold text-night-blue text-sm md:text-base">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="font-body text-xs md:text-sm text-soft-gray-dark">
                    {testimonial.baby}
                  </div>
                  <div className="font-body text-xs text-soft-gray-dark mt-1">
                    📍 {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-success-green/10 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-2xl mx-auto">
            <p className="font-body text-success-green font-semibold text-base md:text-lg mb-2">
              ✅ Resultados Reais, Comprovados
            </p>
            <p className="font-body text-soft-gray-dark text-sm md:text-base px-2">
              Todas as mães seguiram exatamente o método ensinado na Jornada Harmonia Noturna. 
              <strong className="text-night-blue"> Agora é a sua vez!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;