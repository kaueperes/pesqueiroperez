import { Fish, Clock, Check, X } from "lucide-react";
import { pesqueiro } from "@/data/pesqueiro";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EspeciesSection from "@/components/EspeciesSection";
import GaleriaLightbox from "@/components/GaleriaLightbox";

export default function PesqueiroPage() {
  return (
    <>
      <PageHero
        icon={Fish}
        titulo="Pesqueiro"
        descricao={pesqueiro.descricao}
        imagem="/hero_pesqueiro.jpg"
      />

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

        {/* Espécies */}
        <section>
          <h2 className="text-2xl font-extrabold text-texto mb-2">Espécies disponíveis</h2>
          <div className="w-10 h-1 bg-azul-medio mb-2 rounded-full" />
          <p className="text-sm text-texto-suave mb-8">Clique em uma espécie para saber mais.</p>
          <EspeciesSection especies={pesqueiro.especies} />
        </section>

        {/* Galeria */}
        <section>
          <h2 className="text-2xl font-extrabold text-texto mb-2">Conheça a estrutura</h2>
          <div className="w-10 h-1 bg-azul-medio mb-8 rounded-full" />
          <GaleriaLightbox fotos={[
            { src: "/pesqueiro1.jpg", alt: "Pesqueiro Perez" },
            { src: "/pesqueiro2.jpg", alt: "Pesqueiro Perez" },
            { src: "/pesqueiro3.jpg", alt: "Pesqueiro Perez" },
            { src: "/pesqueiro4.jpg", alt: "Pesqueiro Perez" },
            { src: "/pesqueiro5.jpg", alt: "Pesqueiro Perez" },
          ]} />
        </section>

        {/* Taxas */}
        <section>
          <h2 className="text-2xl font-extrabold text-texto mb-2">Taxa da Pesca Esportiva</h2>
          <div className="w-10 h-1 bg-azul-medio mb-8 rounded-full" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {pesqueiro.taxas.map((t) => (
              <div key={t.perfil} className="bg-white rounded-2xl border border-cinza-borda p-5 text-center shadow-sm">
                <p className="text-xs text-texto-suave mb-2 font-medium">{t.perfil}</p>
                {t.valor > 0 ? (
                  <p className="text-3xl font-extrabold text-azul-medio">R$ {t.valor}</p>
                ) : (
                  <p className="text-xl font-extrabold text-green-600">{t.obs}</p>
                )}
              </div>
            ))}
          </div>
          <div className="bg-azul-pale border border-azul-borda rounded-2xl p-5 space-y-2">
            {pesqueiro.taxasObs.map((obs) => (
              <p key={obs} className="text-texto-suave text-sm flex gap-2">
                <span className="text-azul-medio mt-0.5">•</span>
                {obs}
              </p>
            ))}
          </div>
        </section>

        {/* Regras */}
        <section>
          <h2 className="text-2xl font-extrabold text-texto mb-2">Regras do Pesqueiro</h2>
          <div className="w-10 h-1 bg-azul-medio mb-8 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-3">
              {pesqueiro.regras.filter(r => r.permitido).map((r) => (
                <div key={r.texto} className="flex gap-3 rounded-xl p-4 border text-sm bg-green-50 border-green-200 text-green-800">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-green-600" />
                  {r.texto}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {pesqueiro.regras.filter(r => !r.permitido).map((r) => (
                <div key={r.texto} className="flex gap-3 rounded-xl p-4 border text-sm bg-red-50 border-red-200 text-red-800">
                  <X className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                  {r.texto}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incluso + Horário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-extrabold text-texto mb-2">O que está incluso</h2>
            <div className="w-10 h-1 bg-azul-medio mb-6 rounded-full" />
            <div className="space-y-3">
              {pesqueiro.incluso.map((item) => (
                <div key={item} className="bg-azul-pale rounded-xl p-4 flex items-center gap-3 border border-azul-borda">
                  <Check className="text-azul-medio w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium text-texto">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-azul-navy rounded-2xl p-6 text-white flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-azul-brilho w-6 h-6" />
              <h2 className="text-xl font-bold">Horário de Funcionamento</h2>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-white/80"><span className="text-white/50">Pesqueiro & Restaurante:</span> {pesqueiro.horario}</p>
              <p className="text-white/80"><span className="text-white/50">Hospedagem:</span> Todos os dias</p>
            </div>
            <p className="text-white/60 text-sm">Hóspedes da pousada têm acesso estendido à pesca noturna.</p>
          </section>
        </div>

        {/* CTA */}
        <section className="text-center bg-cinza-bg rounded-2xl p-10 border border-cinza-borda">
          <h3 className="text-2xl font-bold text-texto mb-3">Dúvidas ou quer saber mais?</h3>
          <p className="text-texto-suave mb-6">Entre em contato pelo WhatsApp ou faça sua reserva na pousada.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5515996040640"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#20bd5a] transition-colors"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/pousada#reserva"
              className="bg-azul-medio text-white font-bold px-8 py-3 rounded-lg hover:bg-azul-claro transition-colors"
            >
              Reservar Chalé
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
