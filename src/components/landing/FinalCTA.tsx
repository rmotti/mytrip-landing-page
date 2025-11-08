import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Comece gratuitamente hoje</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para planejar sua{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              próxima aventura?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de viajantes que já organizam suas viagens com clareza, economia e tranquilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="gradient-hero text-primary-foreground shadow-large hover:shadow-large hover:scale-105 transition-smooth text-base sm:text-lg px-10 py-7"
            >
              <a
                href="https://mytrip-frontend.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Cadastrar-se Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-base sm:text-lg px-10 py-7"
            >
              <a
                href="https://mytrip-frontend.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Já tenho conta
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Sem cartão de crédito necessário • Grátis para sempre
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
