import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const expertImg = "/manus-storage/expert-real_a9b88540.jpg";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSectionV2() {
  const [salesProgress, setSalesProgress] = useState(42);
  const [soldCount] = useState(128);
  const [maxProgress, setMaxProgress] = useState(68);
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { trackEvent } = useFacebookPixel();

  useEffect(() => {
    const calculateMaxProgress = () => {
      const targetDate = new Date("2026-06-24T15:00:00-03:00").getTime();
      const now = new Date().getTime();
      const totalTime = targetDate - new Date("2026-06-17T18:30:00-03:00").getTime();
      const elapsedTime = now - new Date("2026-06-17T18:30:00-03:00").getTime();
      const progressPercentage = Math.min((elapsedTime / totalTime) * 100, 100);
      return Math.max(42, Math.floor(progressPercentage));
    };
    
    setMaxProgress(calculateMaxProgress());
    setSalesProgress(calculateMaxProgress());
    
    const progressInterval = setInterval(() => {
      setSalesProgress((prev) => {
        const newMax = calculateMaxProgress();
        setMaxProgress(newMax);
        return Math.min(prev + 0.5, newMax);
      });
    }, 1000);
    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date("2026-06-24T15:00:00-03:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { v: countdown.days, l: "dias" },
    { v: countdown.hours, l: "horas" },
    { v: countdown.minutes, l: "min" },
    { v: countdown.seconds, l: "seg" },
  ];

  const handleCheckoutClick = () => {
    trackEvent("InitiateCheckout", {
      value: 47,
      currency: "BRL",
    });
  };

  return (
    <>
      {/* Fixed Timer Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-accent py-2">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop banner */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            <div className="flex-shrink-0">
              <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase leading-none">Edição Especial</div>
              <div className="text-base font-bold text-foreground leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Lançamento Múltiplo
              </div>
              <div className="text-xs text-muted-foreground leading-none">Primeira Edição</div>
            </div>

            <div className="bg-accent/10 border-2 border-accent rounded-lg px-5 py-2">
              <div className="flex items-center gap-2">
                {units.map((it, i) => (
                  <div key={it.l} className="flex items-center gap-2">
                    <div className="text-center">
                      <div className="text-xl font-black text-accent leading-none" style={{ fontFamily: "var(--font-display)" }}>
                        {it.v.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider leading-none">{it.l}</div>
                    </div>
                    {i < 3 && <span className="text-accent font-black text-xl">:</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase leading-none">Quando:</div>
              <div className="text-sm font-bold text-foreground leading-tight">24 de Junho</div>
              <div className="text-xs text-muted-foreground leading-none">15h às 18h</div>
              <div className="text-xs text-accent font-bold leading-none">Ao vivo</div>
            </div>
          </div>

          {/* Mobile banner */}
          <div className="lg:hidden flex flex-col gap-3">
            <div className="text-xs font-bold text-muted-foreground tracking-widest uppercase leading-none">Edição Especial</div>
            <div className="text-sm font-bold text-foreground leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Lançamento Múltiplo
            </div>
            <div className="bg-accent/10 border-2 border-accent rounded-lg px-3 py-2">
              <div className="flex items-center gap-1">
                {units.map((it, i) => (
                  <div key={it.l} className="flex items-center gap-1">
                    <div className="text-center">
                      <div className="text-sm font-black text-accent leading-none" style={{ fontFamily: "var(--font-display)" }}>
                        {it.v.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs font-bold text-accent uppercase tracking-wider leading-none">{it.l}</div>
                    </div>
                    {i < 3 && <span className="text-accent font-black">:</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-black leading-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  Como Chegar no Dia do Lançamento Já no Lucro por Lead
                </h1>
                <p className="text-lg lg:text-xl font-semibold text-accent">
                  Rodando Gravações que Você Já Tem, com Aquisição a Custo Zero, Sem Uma Única Live Nova
                </p>
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                Estrategista de 128 lançamentos e R$300M gerados revela o sistema do Lançamento Múltiplo. O mesmo modelo usado na operação do Pablo Marçal que gerou R$1,5 milhão de lucro antes da primeira live começar, usando gravações que já existiam e sem depender de orgânico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://pay.onprofit.com.br/P5JlkAul?off=2M6zVD"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCheckoutClick}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Garantir meu Ingresso | Lote 01 <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">42% dos ingressos vendidos</span>
                  <span className="text-sm font-bold text-accent">R$ 47,00</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-accent to-accent/70 h-full transition-all duration-300"
                    style={{ width: `${salesProgress}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground">{soldCount} ingressos vendidos • Vagas limitadas</div>
              </div>

              {/* Benefits Box */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-bold text-foreground">Quem vai te ensinar:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg leading-none mt-0.5">✓</span>
                    <span className="text-sm text-muted-foreground">Operou mais de 128 lançamentos de grande escala</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg leading-none mt-0.5">✓</span>
                    <span className="text-sm text-muted-foreground">Estrategista de players como Pablo Marçal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg leading-none mt-0.5">✓</span>
                    <span className="text-sm text-muted-foreground">Mentor de centenas de infoprodutores de sucesso</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
                <img
                  src={expertImg}
                  alt="Especialista"
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Floating Cards */}
                <div className="absolute top-1/3 -right-4 lg:right-0 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Milhões Gerados</div>
                  <div className="text-3xl font-black text-accent" style={{ fontFamily: "var(--font-display)" }}>
                    R$ 300M+
                  </div>
                </div>

                <div className="absolute bottom-1/4 -left-4 lg:left-0 bg-card border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Lançamentos Operados</div>
                  <div className="text-3xl font-black text-accent" style={{ fontFamily: "var(--font-display)" }}>
                    128+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
