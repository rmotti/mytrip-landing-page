import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-soft -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Planeje, organize e{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                viva a sua próxima viagem
              </span>{" "}
              — sem perder o controle do orçamento.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              O MyTrip ajuda você a transformar planos em experiências. Acompanhe gastos, metas e memórias de cada viagem em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="gradient-hero text-primary-foreground shadow-large hover:shadow-large hover:scale-105 transition-smooth text-base sm:text-lg px-8 py-6"
              >
                <a
                  href="https://my-trip-frontend.vercel.app/#/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Comece Agora — É Grátis!
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-base sm:text-lg px-8 py-6"
              >
                <a
                  href="https://my-trip-frontend.vercel.app/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Já tenho conta
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Planejamento de viagem no MyTrip"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
