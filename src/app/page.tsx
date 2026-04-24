import Link from "next/link";
import { Fish, Home, UtensilsCrossed, ChevronRight, MapPin, Clock, Phone } from "lucide-react";
import HeroAnimado from "@/components/HeroAnimado";

const destaques = [
  {
    icon: Fish,
    titulo: "Pesqueiro",
    descricao: "Lagos bem cuidados com tilápia, pacu, pintado e muito mais. Estrutura completa para toda a família.",
    href: "/pesqueiro",
    imagem: "/pesqueiro.jpg",
  },
  {
    icon: Home,
    titulo: "Pousada",
    descricao: "14 chalés confortáveis em meio à natureza. Descanse e acorde com o canto dos pássaros.",
    href: "/pousada",
    imagem: "/pousada.jpg",
  },
  {
    icon: UtensilsCrossed,
    titulo: "Restaurante",
    descricao: "Pratos frescos de peixe e frango. Porções caprichadas e receitas da família. Almoço e jantar até as 18h.",
    href: "/restaurante",
    imagem: "/restaurante.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroAnimado />

      {/* Info rápida */}
      <section className="bg-white border-b border-cinza-borda py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm text-texto-suave">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-azul-medio" />
            Terça a Domingo: 8h às 18h
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-azul-medio" />
            Cesário Lange — SP
          </span>
          <a
            href="tel:+5515996040640"
            className="flex items-center gap-2 hover:text-azul-medio transition-colors"
          >
            <Phone className="w-4 h-4 text-azul-medio" />
            (15) 99604-0640
          </a>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-texto mb-3">
            O que oferecemos
          </h2>
          <div className="w-12 h-1 bg-azul-medio mx-auto mb-4 rounded-full" />
          <p className="text-texto-suave max-w-lg mx-auto">
            Tudo que você precisa para um dia perfeito em contato com a
            natureza, em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destaques.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.titulo}
                href={item.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-cinza-borda hover:shadow-lg hover:border-azul-borda transition-all hover:-translate-y-1"
              >
                <div className="h-36 border-b border-azul-borda overflow-hidden">
                  {item.imagem ? (
                    <img src={item.imagem} alt={item.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="bg-azul-pale h-full flex items-center justify-center">
                      <Icon className="text-azul-medio w-14 h-14 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-texto mb-2">{item.titulo}</h3>
                  <p className="text-texto-suave text-sm leading-relaxed mb-4">{item.descricao}</p>
                  <span className="text-azul-medio font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Reserva */}
      <section className="bg-azul-navy py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Venha criar memórias incríveis para sua família
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Reserve seu chalé e garanta sua vaga.
        </p>
        <Link
          href="/pousada#reserva"
          className="bg-white text-azul-navy font-bold px-10 py-4 rounded-lg text-base hover:bg-azul-pale transition-colors inline-block"
        >
          Reservar Agora
        </Link>
      </section>

      {/* Como chegar */}
      <section className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-texto mb-3">Como chegar</h2>
          <div className="w-10 h-1 bg-azul-medio mb-5 rounded-full" />
          <p className="text-texto-suave mb-4 leading-relaxed">
            Estrada Municipal Cesário Lange a Pereiras, s/n.
            <br />
            Bairro Boiadeiro — Cesário Lange/SP
          </p>
          <Link href="/contato" className="text-azul-medio font-semibold hover:underline flex items-center gap-1">
            Ver mapa completo <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-md h-64 border border-cinza-borda">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5!2d-47.97617!3d-23.19429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c67b3362c8fc5d:0x9d54b28019cf5aa0!2sPesqueiro%20e%20Pousada%20Perez!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Pesqueiro Perez"
          />
        </div>
      </section>
    </>
  );
}
