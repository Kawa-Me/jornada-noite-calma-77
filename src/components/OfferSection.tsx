import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";

const OfferSection = () => {

  return (
    <section className="py-12 md:py-20 bg-gradient-night text-white">
      <div className="container max-w-4xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
            Sua Vaga na Jornada Harmonia Noturna
          </h2>
          <p className="font-body text-lg md:text-xl text-white/90 px-2">
            Com condições especiais que não vão durar para sempre
          </p>
        </div>

        <Card className="bg-white text-night-blue-dark shadow-strong border-0 overflow-hidden">
          <CardHeader className="bg-golden-yellow text-night-blue-dark text-center py-6 md:py-8">
            <CardTitle className="font-heading text-xl md:text-2xl lg:text-3xl font-bold px-2">
              OFERTA ESPECIAL DE LANÇAMENTO
            </CardTitle>
            <p className="font-body text-base md:text-lg font-semibold mt-2 px-2">
              Tudo que você precisa para transformar as noites da sua família
            </p>
          </CardHeader>
          
          <CardContent className="p-4 md:p-8">
            {/* Main Course */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-success-green flex-shrink-0" />
                <span className="font-body text-base md:text-lg font-semibold">
                  Acesso Vitalício ao Curso "Jornada Harmonia Noturna"
                </span>
              </div>
              <p className="font-body text-soft-gray-dark ml-7 md:ml-9 text-sm md:text-base">
                5 módulos completos + materiais de apoio + atualizações futuras
              </p>
            </div>

            {/* Exclusive Bonuses */}
            <div className="mb-6 md:mb-8">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-golden-yellow mb-4 text-center">
                🌟 Bônus Exclusivos Que Vão Transformar Sua Jornada na Maternidade
              </h3>
              <p className="font-body text-sm md:text-base text-soft-gray-dark mb-6 text-center">
                Além do conteúdo completo do curso, você vai receber 6 bônus incríveis, pensados para apoiar você em cada fase do sono do bebê — e também no seu autocuidado.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body text-sm md:text-base font-semibold text-night-blue-dark mb-1">
                      📘 1. A Arte do Aconchego (0–3 meses)
                    </h4>
                    <p className="font-body text-xs md:text-sm text-soft-gray-dark">
                      Aprenda a decifrar os sinais do seu recém-nascido, entender os diferentes tipos de choro e dominar técnicas de aconchego como o swaddle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body text-sm md:text-base font-semibold text-night-blue-dark mb-1">
                      📘 2. A Grande Virada – Construindo a Autonomia do Sono
                    </h4>
                    <p className="font-body text-xs md:text-sm text-soft-gray-dark">
                      Descubra como atravessar a regressão dos 4 meses e começar, com leveza, a criar hábitos de sono mais independentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body text-sm md:text-base font-semibold text-night-blue-dark mb-1">
                      📘 3. Noites Melhores (6–12 meses)
                    </h4>
                    <p className="font-body text-xs md:text-sm text-soft-gray-dark">
                      Um manual completo para enfrentar os maiores desafios dessa fase: dentes, saltos de desenvolvimento e ansiedade de separação.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body text-sm md:text-base font-semibold text-night-blue-dark mb-1">
                      📘 4. Navegando as Regressões de Sono
                    </h4>
                    <p className="font-body text-xs md:text-sm text-soft-gray-dark">
                      As regressões não precisam ser um pesadelo. Aqui você encontra explicações claras e planos de ação para cada idade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body text-sm md:text-base font-semibold text-night-blue-dark mb-1">
                      📘 5. Você em Primeiro Lugar – Guia de Autocuidado para Mães
                    </h4>
                    <p className="font-body text-xs md:text-sm text-soft-gray-dark">
                      Aprenda a pedir ajuda sem culpa, estabelecer limites saudáveis e criar pequenos rituais de autocuidado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body text-sm md:text-base font-semibold text-night-blue-dark mb-1">
                      🎧 6. Playlist de Áudios para Mães
                    </h4>
                    <p className="font-body text-xs md:text-sm text-soft-gray-dark">
                      Kit de autocuidado em áudio: meditações guiadas, afirmações positivas, relaxamento e música instrumental.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-golden-yellow/10 rounded-lg border border-golden-yellow/20">
                <p className="font-body text-sm md:text-base text-night-blue-dark text-center font-semibold">
                  ✨ Com esses bônus, você terá um verdadeiro kit de sobrevivência e transformação para o primeiro ano do seu bebê
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-6 md:mb-8">
              <div className="mb-4">
                <p className="font-body text-soft-gray-dark line-through text-lg md:text-xl">
                  De R$ 297
                </p>
                <p className="font-heading text-3xl md:text-5xl font-bold text-golden-yellow mb-2">
                  R$ 97 à vista
                </p>
                <p className="font-body text-base md:text-lg text-night-blue">
                  ou 12x de <strong>R$ 11,28</strong> no cartão
                </p>
              </div>
              <p className="font-body text-sm text-success-green font-semibold px-2">
                💳 Parcele no cartão de crédito ou PIX com desconto
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full mb-4 text-sm md:text-base py-3 md:py-4"
                asChild
              >
                <a href="https://pay.cakto.com.br/39ivm65_537219" target="_blank" rel="noopener noreferrer">
                  GARANTIR MINHA VAGA COM DESCONTO
                </a>
              </Button>
              
              <div className="flex justify-center items-center gap-2 md:gap-4 mt-4 flex-wrap text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-success-green" />
                  <span className="font-body text-soft-gray-dark">Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-success-green" />
                  <span className="font-body text-soft-gray-dark">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-success-green" />
                  <span className="font-body text-soft-gray-dark">Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OfferSection;