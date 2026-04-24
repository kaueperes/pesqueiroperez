"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Foto {
  src: string;
  alt: string;
}

export default function GaleriaLightbox({ fotos }: { fotos: Foto[] }) {
  const [aberta, setAberta] = useState<Foto | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setAberta(null);
    }
    if (aberta) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [aberta]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {fotos.map((foto, i) => (
          <div
            key={i}
            className={`aspect-video rounded-2xl overflow-hidden border border-cinza-borda bg-cinza-bg flex flex-col items-center justify-center gap-2 text-texto-suave ${foto.src ? "cursor-pointer group" : ""}`}
            onClick={() => foto.src && setAberta(foto)}
          >
            {foto.src ? (
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <>
                <svg className="w-8 h-8 text-cinza-borda" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M3 3h18M3.75 3v13.5A2.25 2.25 0 006 18.75h12A2.25 2.25 0 0020.25 16.5V3" />
                </svg>
                <span className="text-xs font-medium">Em breve</span>
              </>
            )}
          </div>
        ))}
      </div>

      {aberta && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setAberta(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setAberta(null)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={aberta.src}
            alt={aberta.alt}
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
