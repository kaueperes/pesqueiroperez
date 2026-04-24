import { Home, Check, Clock, CreditCard, Waves, Trees, Fish, UtensilsCrossed, PawPrint, AlertCircle } from "lucide-react";
import { politicaReserva, tarifas, tarifaCriancas, incluso } from "@/data/pousada";
import ReservaForm from "@/components/ReservaForm";
import PageHero from "@/components/PageHero";
import GaleriaLightbox from "@/components/GaleriaLightbox";

export default function PousadaPage() {
  return (
    <>
      <PageHero
        icon={Home}
        titulo="Pousada"
        descricao={"Chalés aconchegantes e confortáveis, piscina exclusiva\nem formato de peixe e café da manhã incluso.\nUma experiência completa de descanso para toda a família."}
        imagem="/hero_pousada.jpg"
      />

      {/* Por que se hospedar */}
      <section className="bg-azul-pale border-b border-azul-borda py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-texto mb-3">Por que se hospedar no Perez?</h2>
            <div className="w-10 h-1 bg-azul-medio mx-auto mb-4 rounded-full" />
            <p className="text-texto-suave max-w-xl mx-auto">
              Mais do que um hotel — uma fuga completa da cidade com tudo que você precisa para descansar de verdade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Waves, titulo: "Piscina Exclusiva", texto: "Nossa piscina tem formato de peixe — um charme único que encanta adultos e crianças." },
              { icon: Trees, titulo: "Natureza ao Redor", texto: "Chalés rodeados de verde. Acorde com o canto dos pássaros e o frescor da manhã." },
              { icon: Fish, titulo: "Pesca na Porta", texto: "Pescaria diurna e noturna incluída. Tire seus peixes de manhã cedo — uma experiência que as crianças nunca esquecem." },
              { icon: UtensilsCrossed, titulo: "Café da Manhã Incluso", texto: "Café da manhã das 8h às 10h incluso na diária. Restaurante com peixe fresquinho a poucos passos do chalé." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titulo} className="bg-white rounded-2xl p-6 shadow-sm border border-azul-borda text-center">
                  <div className="bg-azul-pale rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 border border-azul-borda">
                    <Icon className="text-azul-medio w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-texto mb-2 text-sm">{item.titulo}</h3>
                  <p className="text-texto-suave text-xs leading-relaxed">{item.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* Galeria */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-texto mb-2">Conheça a estrutura</h2>
          <div className="w-10 h-1 bg-azul-medio mb-8 rounded-full" />
          <GaleriaLightbox fotos={[
            { src: "/pousada1.jpg", alt: "Pousada Perez" },
            { src: "/pousada2.jpg", alt: "Pousada Perez" },
            { src: "/pousada3.jpg", alt: "Pousada Perez" },
            { src: "/pousada4.jpg", alt: "Pousada Perez" },
            { src: "/pousada5.jpg", alt: "Pousada Perez" },
            { src: "/pousada6.jpg", alt: "Pousada Perez" },
            { src: "/pousada7.jpg", alt: "Pousada Perez" },
            { src: "/pousada8.jpg", alt: "Pousada Perez" },
            { src: "/pousada9.jpg", alt: "Pousada Perez" },
            { src: "/pousada10.jpg", alt: "Pousada Perez" },
          ]} />
        </section>

        {/* Tarifas */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-texto mb-2">Valor da Diária</h2>
          <div className="w-10 h-1 bg-azul-medio mb-2 rounded-full" />
          <p className="text-texto-suave text-sm mb-8">Preço por pessoa. Crianças têm condições especiais.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {tarifas.map((t) => (
              <div
                key={t.periodo}
                className={`rounded-2xl p-6 text-center border ${t.destaque ? "bg-azul-navy text-white border-azul-navy" : "bg-white border-cinza-borda"}`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${t.destaque ? "text-white/70" : "text-texto-suave"}`}>{t.periodo}</p>
                <p className={`text-4xl font-extrabold mb-1 ${t.destaque ? "text-white" : "text-azul-medio"}`}>
                  R$ {t.preco}
                </p>
                <p className={`text-xs ${t.destaque ? "text-white/60" : "text-texto-suave"}`}>por pessoa</p>
              </div>
            ))}
          </div>

          {/* Crianças */}
          <div className="bg-azul-pale rounded-2xl border border-azul-borda p-6">
            <h3 className="font-bold text-texto mb-4">Crianças</h3>
            <div className="divide-y divide-azul-borda">
              {tarifaCriancas.map((c) => (
                <div key={c.faixa} className="flex justify-between py-3 text-sm">
                  <span className="font-semibold text-texto">{c.faixa}</span>
                  <span className="text-texto-suave">{c.valor}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que está incluso */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-texto mb-2">O que está incluso</h2>
          <div className="w-10 h-1 bg-azul-medio mb-8 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-cinza-borda p-6">
              <h3 className="font-bold text-texto mb-4 text-sm uppercase tracking-wide text-azul-medio">Refeições</h3>
              <ul className="space-y-2">
                {incluso.refeicoes.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-texto-suave">
                    <Check className="text-azul-medio w-4 h-4 shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-cinza-borda p-6">
              <h3 className="font-bold text-texto mb-4 text-sm uppercase tracking-wide text-azul-medio">Lazer</h3>
              <ul className="space-y-2">
                {incluso.lazer.map((l) => (
                  <li key={l} className="flex items-center gap-2 text-sm text-texto-suave">
                    <Check className="text-azul-medio w-4 h-4 shrink-0" />{l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-cinza-borda p-6">
              <h3 className="font-bold text-texto mb-4 text-sm uppercase tracking-wide text-azul-medio">Acomodações</h3>
              <p className="text-xs text-texto-suave mb-3">Chalé para até 4 pessoas</p>
              <ul className="space-y-2">
                {incluso.acomodacoes.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-texto-suave">
                    <Check className="text-azul-medio w-4 h-4 shrink-0" />{a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Piscina destaque */}
        <section className="mb-16 bg-gradient-to-r from-azul-pale to-white rounded-2xl border border-azul-borda p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-azul-medio text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Destaque exclusivo</span>
            <h2 className="text-2xl font-extrabold text-texto mb-3">Piscina em formato de peixe</h2>
            <p className="text-texto-suave leading-relaxed mb-4">
              Um dos encantos que fazem o Perez ser único: nossa piscina foi projetada com formato de peixe —
              um toque especial que arranca sorrisos logo na chegada. Perfeita para as crianças brincarem
              e para os adultos relaxarem com os pés na água enquanto apreciam a natureza.
            </p>
          </div>
          <div className="w-full md:w-60 h-52 rounded-2xl overflow-hidden shrink-0">
            <img src="/piscina.jpg" alt="Piscina em formato de peixe" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Experiência — bloco emocional */}
        <section className="mb-16 bg-azul-navy rounded-2xl p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Imagine sua estadia</h2>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed mb-2">
            De manhã, café quentinho e pescaria. À tarde, piscina para as crianças e descanso para os adultos.
            À noite, família reunida sem pressa e sem ruído — só natureza.
          </p>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            É isso que o Pesqueiro Perez oferece: não apenas um lugar para dormir,
            mas uma experiência completa que toda a família vai querer repetir.
          </p>
        </section>

        {/* Política */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-texto mb-2">Informações Importantes</h2>
          <div className="w-10 h-1 bg-azul-medio mb-8 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-2xl border border-cinza-borda p-6 flex gap-4">
              <Clock className="text-azul-medio w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-texto mb-1">Check-in / Check-out</p>
                <p className="text-texto-suave text-sm">Check-in: {politicaReserva.checkIn} &nbsp;|&nbsp; Check-out: {politicaReserva.checkOut}</p>
                <p className="text-texto-suave text-xs mt-2">{politicaReserva.checkInObs}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-cinza-borda p-6 flex gap-4">
              <PawPrint className="text-azul-medio w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-texto mb-1">Taxa Pet</p>
                <p className="text-texto-suave text-sm font-bold text-azul-medio">R$ {politicaReserva.pet.taxa} / diária</p>
                <p className="text-texto-suave text-xs mt-1">{politicaReserva.pet.obs}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-cinza-borda p-6 flex gap-4">
              <CreditCard className="text-azul-medio w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-texto mb-1">Pagamento</p>
                <p className="text-texto-suave text-sm">{politicaReserva.pagamento}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-cinza-borda p-6 flex gap-4">
              <Check className="text-azul-medio w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-texto mb-1">Cancelamento</p>
                <p className="text-texto-suave text-sm">{politicaReserva.cancelamento}</p>
              </div>
            </div>
          </div>

          {/* Aviso alimentação */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">
            <AlertCircle className="text-amber-500 w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1 text-sm">Importante</p>
              <p className="text-amber-700 text-sm leading-relaxed">{politicaReserva.alimentacaoObs}</p>
            </div>
          </div>
        </section>

        {/* Formulário */}
        <section id="reserva">
          <h2 className="text-2xl font-extrabold text-texto mb-1">Fazer Reserva</h2>
          <p className="text-texto-suave mb-6">Preencha abaixo e entraremos em contato pelo WhatsApp para confirmar disponibilidade e valores.</p>
          <div className="w-10 h-1 bg-azul-medio mb-8 rounded-full" />
          <div className="bg-white rounded-2xl shadow-sm border border-cinza-borda p-6 md:p-8">
            <ReservaForm />
          </div>
        </section>
      </div>
    </>
  );
}
