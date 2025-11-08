import { useState, useEffect } from "react";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MyTrip
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
            >
              Por quê MyTrip
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
            >
              Depoimentos
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-foreground hover:text-primary"
            >
              <a
                href="https://my-trip-frontend.vercel.app/#/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="gradient-hero text-primary-foreground shadow-medium hover:shadow-large transition-smooth"
            >
              <a
                href="https://my-trip-frontend.vercel.app/#/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cadastrar-se
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
