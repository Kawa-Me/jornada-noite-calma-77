import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Heart, Calendar, TrendingUp, Sparkles } from "lucide-react";

const CourseModulesSection = () => {
  const modules = [
    {
      icon: Moon,
      title: "A Base de Tudo: Entendendo a Ciência do Sono",
      description: "Descubra os segredos por trás dos ciclos de sono do seu bebê e como trabalhar a favor da natureza."
    },
    {
      icon: Heart,
      title: "A Arte de Acalmar: O Guia do Recém-Nascido",
      description: "Técnicas comprovadas para tranquilizar seu bebê e criar uma atmosfera de paz e segurança."
    },
    {
      icon: Calendar,
      title: "Construindo a Rotina: O Poder dos Hábitos",
      description: "Como estabelecer rotinas que funcionam para toda a família, respeitando o ritmo individual do seu bebê."
    },
    {
      icon: TrendingUp,
      title: "Superando os Desafios: Regressões e Ansiedade",
      description: "Estratégias para navegar pelos saltos de desenvolvimento sem perder o progresso conquistado."
    },
    {
      icon: Sparkles,
      title: "Cuidando de Você: O Sono e Bem-Estar da Mãe",
      description: "Porque uma mãe descansada é capaz de cuidar melhor do seu bebê e de toda a família."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-soft-gray">
      <div className="container max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-night-blue mb-4 md:mb-6 leading-tight px-2">
            O Mapa Completo que Você Terá Acesso Imediato
          </h2>
          <p className="font-body text-lg md:text-xl text-soft-gray-dark max-w-3xl mx-auto px-2">
            5 módulos estruturados para te levar da exaustão à tranquilidade, passo a passo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="bg-card border-0 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
              <CardHeader className="text-center pb-3 md:pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-night rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <module.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <CardTitle className="font-heading text-lg md:text-xl text-night-blue leading-tight px-2">
                  Módulo {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-3 md:px-6">
                <h3 className="font-body font-semibold text-base md:text-lg text-night-blue mb-2 md:mb-3 leading-tight">
                  {module.title}
                </h3>
                <p className="font-body text-soft-gray-dark leading-relaxed text-sm md:text-base">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModulesSection;