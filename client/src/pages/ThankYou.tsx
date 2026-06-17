import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-accent/40 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Seu ingresso foi garantido!
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold">
            Bem-vindo ao Treinamento Lançamento Múltiplo
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Parabéns! Você acaba de dar o primeiro passo para transformar seus lançamentos e começar a lucrar desde o primeiro dia.
          </p>
          <p>
            Agora, entre no nosso grupo exclusivo do WhatsApp para receber todas as informações sobre o treinamento, dúvidas em tempo real e acesso aos bastidores reais de operações que geraram milhões.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-14 px-8 rounded-lg group relative overflow-hidden w-full sm:w-fit"
            style={{
              boxShadow: "0 0 30px rgba(255, 68, 68, 0.6), 0 0 60px rgba(255, 68, 68, 0.3)",
              fontFamily: "var(--font-body)",
            }}
          >
            <a
              href="https://chat.whatsapp.com/Ge4mzhRXiArGZrOpc2tEhg?s=cl&p=a&mlu=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Entrar no Grupo do WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Additional Info */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">
            Informações importantes sobre o treinamento:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">📅</span>
                <div>
                  <p className="font-semibold text-foreground">Data do Treinamento</p>
                  <p className="text-sm text-muted-foreground">24 de Junho</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">🕐</span>
                <div>
                  <p className="font-semibold text-foreground">Horário</p>
                  <p className="text-sm text-muted-foreground">15h às 18h (Ao vivo)</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">⏱️</span>
                <div>
                  <p className="font-semibold text-foreground">Duração</p>
                  <p className="text-sm text-muted-foreground">3 horas de conteúdo estratégico</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold flex-shrink-0">👨‍🏫</span>
                <div>
                  <p className="font-semibold text-foreground">Instrutor</p>
                  <p className="text-sm text-muted-foreground">Luiz Filho</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="pt-8 space-y-4">
          <p className="text-sm text-muted-foreground">
            Qualquer dúvida, nosso time está pronto para ajudar no grupo do WhatsApp.
          </p>
          <p className="text-xs text-muted-foreground/70">
            © 2026 Luiz Filho — O Novo Jogo dos Lançamentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
