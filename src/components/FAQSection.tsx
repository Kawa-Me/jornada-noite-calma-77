import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "Você terá acesso vitalício! Isso significa para sempre, sem data de expiração. Poderá revisitar o conteúdo quantas vezes precisar e ainda receber todas as atualizações futuras sem custo adicional."
    },
    {
      question: "Como receberei o acesso ao curso?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à plataforma. Em menos de 2 minutos após a compra, já estará assistindo ao primeiro módulo."
    },
    {
      question: "Funciona mesmo se já tentei de tudo?",
      answer: "Sim! A diferença é que não oferecemos 'dicas soltas', mas um método completo e científico. Muitas mães chegam até nós depois de tentarem várias abordagens sem sucesso, e é exatamente para elas que desenvolvemos este sistema estruturado."
    },
    {
      question: "É seguro fazer o pagamento online?",
      answer: "Absolutamente seguro! Usamos a Cakto, uma das mais seguras plataformas de pagamentos digitais do Brasil, com certificação SSL e proteção total dos seus dados. Seus dados financeiros nunca ficam armazenados conosco."
    },
    {
      question: "O método funciona para bebês de quantos meses?",
      answer: "O curso é especialmente desenvolvido para bebês de 0 a 12 meses, com técnicas adaptadas para cada fase do desenvolvimento. Temos estratégias específicas para recém-nascidos, bebês de 3-6 meses e bebês maiores de 6 meses."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-soft-gray">
      <div className="container max-w-4xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-night-blue mb-4 md:mb-6 leading-tight px-2">
            Ainda tem dúvidas?
          </h2>
          <p className="font-body text-lg md:text-xl text-soft-gray-dark px-2">
            Vamos esclarecer tudo para que você tome a melhor decisão
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg shadow-soft border-0 px-4 md:px-6"
            >
              <AccordionTrigger className="font-body text-left font-semibold text-night-blue hover:no-underline py-4 md:py-6 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground leading-relaxed pb-4 md:pb-6 text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;