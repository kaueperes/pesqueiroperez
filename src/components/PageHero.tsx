import { type LucideIcon } from "lucide-react";

interface PageHeroProps {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  imagem?: string;
}

export default function PageHero({ icon: Icon, titulo, descricao, imagem }: PageHeroProps) {
  if (imagem) {
    return (
      <section className="relative overflow-hidden px-4 text-center md:h-[380px]">
        <img
          src={imagem}
          alt={titulo}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-azul-navy/80" />
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center justify-center py-16 md:h-full md:py-0">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-5">
            <Icon className="text-white w-7 h-7" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{titulo}</h1>
          <div className="w-12 h-1 bg-azul-brilho mx-auto mb-5 rounded-full" />
          <p className="text-white/80 text-lg leading-relaxed whitespace-pre-line">{descricao}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-azul-pale border-b border-azul-borda py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-azul-medio/10 mb-5">
          <Icon className="text-azul-medio w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-texto mb-4">{titulo}</h1>
        <div className="w-12 h-1 bg-azul-medio mx-auto mb-5 rounded-full" />
        <p className="text-texto-suave text-lg leading-relaxed">{descricao}</p>
      </div>
    </section>
  );
}
