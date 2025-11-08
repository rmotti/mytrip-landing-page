import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Evite surpresas financeiras durante a viagem",
    description: "Com o controle de gastos em tempo real, você sempre sabe quanto já gastou e quanto ainda tem disponível.",
  },
  {
    title: "Tenha tudo organizado em um único lugar",
    description: "Não precisa mais de planilhas, anotações ou múltiplos aplicativos. Tudo está aqui, acessível de qualquer dispositivo.",
  },
  {
    title: "Acompanhe cada detalhe em tempo real",
    description: "Adicione despesas no momento em que acontecem e veja instantaneamente o impacto no seu orçamento.",
  },
  {
    title: "Perfeito para viajantes solo, casais e grupos",
    description: "Seja qual for o estilo da sua viagem, o MyTrip se adapta às suas necessidades de planejamento e controle.",
  },
];

const WhyMyTrip = () => {
  return (
    <section id="why" className="py-20 sm:py-24 lg:py-32 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Por que usar o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MyTrip?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme a forma como você planeja e vive suas viagens
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-card hover:bg-feature-hover transition-smooth shadow-soft hover:shadow-medium animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMyTrip;
