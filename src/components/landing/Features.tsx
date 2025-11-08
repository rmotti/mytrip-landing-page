import { MapPin, DollarSign, Target, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Planejamento de Viagem",
    description: "Cadastre destinos, datas e orçamento total. Organize cada detalhe da sua aventura em um único lugar.",
  },
  {
    icon: DollarSign,
    title: "Controle de Gastos",
    description: "Adicione despesas em categorias como voo, hotel e alimentação. Saiba exatamente para onde seu dinheiro está indo.",
  },
  {
    icon: Target,
    title: "Metas Financeiras",
    description: "Defina limites e compare valores planejados vs realizados. Mantenha seu orçamento sob controle durante toda a viagem.",
  },
  {
    icon: BarChart3,
    title: "Visão Clara e Bonita",
    description: "Veja gráficos e resumos intuitivos para cada viagem. Tome decisões informadas com dados visuais e fáceis de entender.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              viajar com tranquilidade
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ferramentas poderosas e intuitivas para planejar cada aspecto da sua viagem
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-feature-bg hover:bg-feature-hover transition-smooth shadow-soft hover:shadow-medium animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-medium">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
