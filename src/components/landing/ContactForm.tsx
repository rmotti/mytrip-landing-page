import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { Mail, User2, MessageSquareText, ArrowRight } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const TO_EMAIL = "mytriprm@gmail.com";
  const SERVICE_ID = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const TEMPLATE_ID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const PUBLIC_KEY = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Informe seu nome";
    if (!form.email.trim()) e.email = "Informe seu e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (!form.message.trim()) e.message = "Descreva sua dúvida";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange =
    (key: keyof FormState) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: ev.target.value }));
    };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Verifica configuração do EmailJS
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "EmailJS não configurado",
        description: "Defina VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY.",
        variant: "destructive",
      });
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email, // para responder ao usuário
          message: form.message,
          to_email: TO_EMAIL, // destinatário fixo
          subject: `Contato MyTrip — ${form.name}`,
        },
        PUBLIC_KEY,
      );

      toast({ title: "Mensagem enviada com sucesso" });
      setForm(initialState);
    } catch (error) {
      console.error("EmailJS error", error);
      toast({ title: "Erro ao enviar mensagem", description: "Tente novamente em instantes.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Fale conosco</h2>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Envie sua mensagem e retornaremos por e-mail. É rápido e sem burocracia.
            </p>
          </div>

          {/* card */}
          <div className="rounded-2xl border bg-card/80 p-6 shadow-xl backdrop-blur-lg sm:p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="group">
                  <Label htmlFor="name" className="mb-2 inline-block text-sm">
                    Nome
                  </Label>
                  <div className="relative">
                    <User2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={onChange("name")}
                      className={`pl-10 transition-all focus-visible:ring-2 ${
                        errors.name ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-primary/50"
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="group">
                  <Label htmlFor="email" className="mb-2 inline-block text-sm">
                    E-mail
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="voce@exemplo.com"
                      value={form.email}
                      onChange={onChange("email")}
                      className={`pl-10 transition-all focus-visible:ring-2 ${
                        errors.email ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-primary/50"
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="group">
                <Label htmlFor="message" className="mb-2 inline-block text-sm">
                  Dúvida
                </Label>
                <div className="relative">
                  <MessageSquareText className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    rows={6}
                    value={form.message}
                    onChange={onChange("message")}
                    className={`resize-y pl-10 transition-all focus-visible:ring-2 ${
                      errors.message ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-primary/50"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                </div>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  Sua mensagem será enviada para {TO_EMAIL}.
                </p>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 font-semibold"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary to-primary/90 transition-opacity group-hover:opacity-95" />
                  <span className="relative">{submitting ? "Enviando…" : "Enviar mensagem"}</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </form>
          </div>

          {/* nota de privacidade */}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Nós respeitamos sua privacidade. Seus dados serão usados apenas para retorno do contato.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
