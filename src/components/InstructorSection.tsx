const instructorPhoto = "/lovable-uploads/694abccd-e7ab-4fd6-afb6-fe6cb2801d86.png";

const InstructorSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-night-blue mb-4 md:mb-6 leading-tight px-2">
            Quem vai te pegar pela mão nesta jornada
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="w-full max-w-xs md:max-w-sm lg:w-1/3">
            <div className="relative">
              <img 
                src={instructorPhoto} 
                alt="Juliana - Especialista em Sono Infantil" 
                className="w-full rounded-2xl shadow-medium"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-golden-yellow rounded-full px-4 py-2 md:px-6 md:py-2 shadow-glow">
                <p className="font-body font-bold text-night-blue-dark text-xs md:text-sm">
                  Especialista em Sono
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left px-2">
            <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-night-blue mb-4 md:mb-6">
              Juliana
            </h3>
            <div className="space-y-4 md:space-y-6 font-body text-base md:text-lg text-foreground leading-relaxed">
              <p>
                Meu nome é <strong>Juliana</strong>. Como você viu no vídeo, eu sou mãe e já estive no fundo do poço da privação de sono. Noites em claro, exaustão extrema, e a sensação de que nunca mais teria uma noite de paz.
              </p>
              <p>
                Criei a <strong className="text-night-blue">Jornada Harmonia Noturna</strong> porque sei que nenhuma mãe deveria passar por isso sozinha. Depois de anos estudando o sono infantil e aplicando métodos científicos com centenas de famílias, desenvolvi um sistema que realmente funciona.
              </p>
              <p className="text-night-blue font-semibold border-l-4 border-golden-yellow pl-3 md:pl-4 bg-golden-yellow/5 py-3 rounded-r-lg">
                "Meu compromisso é te dar as ferramentas para que você e seu bebê tenham noites de paz. Não é magia, é ciência aplicada com muito amor."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;