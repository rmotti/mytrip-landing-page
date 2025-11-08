import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Viajante frequente",
    content: "O MyTrip transformou completamente a forma como organizo minhas viagens. Nunca mais tive surpresas com gastos!",
    avatar: "AS",
  },
  {
    name: "Carlos Mendes",
    role: "Aventureiro",
    content: "Finalmente consigo visualizar todo o meu orçamento de viagem em um só lugar. A interface é linda e super intuitiva.",
    avatar: "CM",
  },
  {
    name: "Mariana Costa",
    role: "Viagens em casal",
    content: "Perfeito para planejar viagens a dois! Conseguimos definir metas juntos e acompanhar tudo em tempo real.",
    avatar: "MC",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              viajantes dizem
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de quem já transformou suas viagens com o MyTrip
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
