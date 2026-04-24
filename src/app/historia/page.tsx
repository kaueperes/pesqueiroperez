import { Heart } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        icon={Heart}
        titulo="Nossa História"
        descricao="Uma história de amor pela natureza, pela pesca e pela hospitalidade."
        imagem="/hero_historia.jpg"
      />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-cinza-borda p-8 md:p-12 space-y-6 text-texto-suave leading-relaxed">
          <p>
            A família Perez sempre teve tradição na pescaria. O pai dos donos,
            Sr. Domingos Perez, costumava levar seus filhos para pescar nos
            ribeirões da região.
          </p>
          <p>
            O terreno que hoje está localizado o pesqueiro foi adquirido em
            2001 pelo filho mais velho Edno Perez. Os dois tanques maiores foram
            construídos para lazer da família, que continuou o gosto pela pesca
            mesmo após o falecimento do pai. Com o passar do tempo foi decidido,
            em parceria com irmão Elcio Peres, construir os dois tanques menores
            com o intuito de criar tilápias para venda. O peixe era vendido
            vivo, e as pessoas tinham que vir até o local para comprá-lo. Muitos
            desses clientes se encantavam com a paisagem do lugar e com
            frequência pediam para que os donos o transformassem em um
            pesqueiro. Esse projeto foi sendo aos poucos idealizado.
          </p>
          <p>
            Em 2016 a esposa do Edno se formou em gastronomia, o que estimulou
            ainda mais a decisão de abrir o pesqueiro e restaurante com as
            receitas de comidas e porções tradicionais da família. Em{" "}
            <strong className="text-texto font-semibold">04 de novembro de 2017</strong>{" "}
            o Pesqueiro Perez foi finalmente inaugurado.
          </p>
          <p>
            Nessa época os irmãos já tinham adquirido também o terreno que fica
            do outro lado da estrada, no qual construíram uma casa para reunir
            os familiares. Com o tempo surgiu mais uma demanda para melhor
            atender os clientes: utilizar esse sítio como espaço de pousada
            para receber as pessoas que vinham de longe. E assim se fez, foram
            construídos chalés para hospedagem e uma piscina em formato de peixe
            que dá um toque todo especial na pousada.
          </p>
          <div className="border-l-4 border-azul-medio pl-6 italic text-texto-suave">
            &ldquo;E nesse ritmo, segue a história deste lugar de descanso e
            diversão, sempre fazendo melhorias em busca de maior conforto e
            lazer para os clientes do pesqueiro e da pousada.&rdquo;
          </div>
        </div>
      </div>
    </>
  );
}
