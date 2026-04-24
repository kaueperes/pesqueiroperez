"use client";

import { useState } from "react";
import { Fish, Scale, ChevronDown } from "lucide-react";

interface Especie {
  nome: string;
  peso: string;
  dificuldade: "Fácil" | "Média" | "Difícil";
  descricao: string;
  imagem?: string;
}

const dificuldadeStyle = {
  Fácil:   "bg-green-50 text-green-700 border-green-200",
  Média:   "bg-amber-50 text-amber-700 border-amber-200",
  Difícil: "bg-red-50   text-red-700   border-red-200",
};

export default function EspeciesSection({ especies }: { especies: Especie[] }) {
  const [selecionada, setSelecionada] = useState<Especie | null>(null);

  function toggle(e: Especie) {
    setSelecionada((prev) => (prev?.nome === e.nome ? null : e));
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {especies.map((e) => (
          <button
            key={e.nome}
            onClick={() => toggle(e)}
            className={`px-5 py-2 rounded-full font-semibold flex items-center gap-2 border transition-all duration-150 ${
              selecionada?.nome === e.nome
                ? "bg-azul-medio text-white border-azul-medio shadow-sm"
                : "bg-azul-pale text-azul-navy border-azul-borda hover:border-azul-medio"
            }`}
          >
            <Fish className="w-4 h-4" />
            {e.nome}
          </button>
        ))}
      </div>

      {selecionada && (
        <div className="mt-6 bg-white rounded-2xl border border-azul-borda shadow-sm overflow-hidden flex flex-col sm:flex-row">
          {/* Imagem */}
          <div className="w-full sm:w-52 h-48 sm:h-auto bg-azul-pale flex items-center justify-center shrink-0 border-b sm:border-b-0 sm:border-r border-azul-borda">
            {selecionada.imagem ? (
              <img
                src={selecionada.imagem}
                alt={selecionada.nome}
                className="w-full h-full object-cover"
              />
            ) : (
              <Fish className="w-16 h-16 text-azul-borda" />
            )}
          </div>

          {/* Info */}
          <div className="p-6 flex flex-col justify-center flex-1">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-extrabold text-texto">{selecionada.nome}</h3>
              <button
                onClick={() => setSelecionada(null)}
                className="text-texto-suave hover:text-texto transition-colors shrink-0"
                aria-label="Fechar"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-texto-suave bg-cinza-bg border border-cinza-borda px-3 py-1 rounded-full">
                <Scale className="w-3.5 h-3.5" /> {selecionada.peso}
              </span>
              <span className={`text-sm px-3 py-1 rounded-full border font-semibold ${dificuldadeStyle[selecionada.dificuldade]}`}>
                Dificuldade: {selecionada.dificuldade}
              </span>
            </div>
            <p className="text-texto-suave text-sm leading-relaxed">{selecionada.descricao}</p>
          </div>
        </div>
      )}
    </>
  );
}
