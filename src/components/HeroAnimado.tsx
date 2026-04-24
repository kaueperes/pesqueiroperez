"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroAnimado() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#eff6ff", height: "calc(100vh - 72px)" }}
    >
      {/* Ondas entardecer — atrás da foto */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="wave-sunset-1 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-25"
            style={{ height: "160vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,140 C200,200 400,80 600,140 C800,200 1000,80 1200,140 C1320,170 1400,120 1440,140 L1440,320 L0,320 Z" fill="#fde68a" />
          </svg>
        </div>
        <div className="wave-sunset-2 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-20"
            style={{ height: "145vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,180 C180,120 360,240 540,180 C720,120 900,240 1080,180 C1260,120 1380,200 1440,180 L1440,320 L0,320 Z" fill="#fdba74" />
          </svg>
        </div>
        <div className="wave-sunset-3 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-15"
            style={{ height: "175vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C240,180 480,60 720,120 C960,180 1200,60 1440,120 L1440,320 L0,320 Z" fill="#fbbf24" />
          </svg>
        </div>
        {/* Segunda camada — reforça o efeito entardecer */}
        <div className="wave-sunset-2 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-20"
            style={{ height: "155vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,140 C200,200 400,80 600,140 C800,200 1000,80 1200,140 C1320,170 1400,120 1440,140 L1440,320 L0,320 Z" fill="#fde68a" />
          </svg>
        </div>
        <div className="wave-sunset-1 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-15"
            style={{ height: "130vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,180 C180,120 360,240 540,180 C720,120 900,240 1080,180 C1260,120 1380,200 1440,180 L1440,320 L0,320 Z" fill="#fb923c" />
          </svg>
        </div>
        <div className="wave-sunset-3 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-10"
            style={{ height: "190vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C240,180 480,60 720,120 C960,180 1200,60 1440,120 L1440,320 L0,320 Z" fill="#fbbf24" />
          </svg>
        </div>
      </div>

      {/* Fade local atrás do texto — full width no mobile, 55% no desktop */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none w-full lg:w-[55%]"
        style={{
          background: "linear-gradient(to right, #eff6ff 65%, transparent 100%)",
        }}
      />

      {/* Foto — direita, atrás das ondas azuis, na frente das amarelas */}
      <img
        src="/foto_hero.png"
        alt="Família no Pesqueiro Perez"
        className="hidden lg:block absolute right-0 bottom-0 pointer-events-none select-none"
        style={{ height: "82%", width: "auto", maxWidth: "none" }}
      />


      {/* Ondas animadas — em cima da foto */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="wave-1 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-40"
            style={{ height: "40vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160 C180,220 360,100 540,160 C720,220 900,100 1080,160 C1260,220 1440,100 1440,160 L1440,320 L0,320 Z" fill="#bfdbfe" />
          </svg>
        </div>
        <div className="wave-2 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-30"
            style={{ height: "32vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 C240,130 480,270 720,200 C960,130 1200,270 1440,200 L1440,320 L0,320 Z" fill="#93c5fd" />
          </svg>
        </div>
        <div className="wave-3 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-60"
            style={{ height: "24vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,240 C120,200 240,280 360,240 C480,200 600,280 720,240 C840,200 960,280 1080,240 C1200,200 1320,280 1440,240 L1440,320 L0,320 Z" fill="#60a5fa" />
          </svg>
        </div>
        {/* Segunda camada água */}
        <div className="wave-2 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-35"
            style={{ height: "46vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160 C180,220 360,100 540,160 C720,220 900,100 1080,160 C1260,220 1440,100 1440,160 L1440,320 L0,320 Z" fill="#93c5fd" />
          </svg>
        </div>
        <div className="wave-1 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-25"
            style={{ height: "36vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 C240,130 480,270 720,200 C960,130 1200,270 1440,200 L1440,320 L0,320 Z" fill="#bfdbfe" />
          </svg>
        </div>
        <div className="wave-3 absolute bottom-0 left-0 w-[200%] h-full">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full opacity-50"
            style={{ height: "28vh" }}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,240 C120,200 240,280 360,240 C480,200 600,280 720,240 C840,200 960,280 1080,240 C1200,200 1320,280 1440,240 L1440,320 L0,320 Z" fill="#3b82f6" />
          </svg>
        </div>
      </div>

      {/* Conteúdo — texto à esquerda */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start h-full" style={{ paddingTop: "7vh" }}>
        <div className="max-w-sm">

          {/* Título */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-texto leading-tight mb-5"
            style={{ animation: "fadeUp 0.7s ease both" }}
          >
            Descanse, mergulhe,{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563eb, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              desconecte
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="text-base sm:text-lg text-texto-suave leading-relaxed mb-10"
            style={{ animation: "fadeUp 0.7s 0.12s ease both" }}
          >
            Chalés confortáveis, piscina em formato de peixe e natureza ao redor.
            Uma experiência completa para a família no melhor pesqueiro da região.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{ animation: "fadeUp 0.7s 0.22s ease both" }}
          >
            <Link
              href="/pousada#reserva"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
              }}
            >
              Fazer Reserva <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/restaurante"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full text-sm font-semibold text-azul-medio transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(37,99,235,0.07)",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
            >
              Ver Cardápio
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
