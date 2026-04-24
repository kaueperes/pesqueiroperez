import { cardapio } from "@/data/cardapio";
import { UtensilsCrossed } from "lucide-react";
import PageHero from "@/components/PageHero";

function formatPrice(price: number) {
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-extrabold text-texto mb-1 flex items-center gap-3">
      <span className="w-1 h-7 bg-azul-medio rounded-full inline-block" />
      {children}
    </h2>
  );
}

function MenuRow({ nome, descricao, preco, precoTexto }: { nome: string; descricao?: string; preco: number; precoTexto?: string }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 border-b border-cinza-borda last:border-0">
      <div className="flex-1">
        <span className="font-semibold text-texto">{nome}</span>
        {descricao && <p className="text-sm text-texto-suave mt-0.5">{descricao}</p>}
      </div>
      <span className="text-azul-medio font-bold whitespace-nowrap">{precoTexto ?? formatPrice(preco)}</span>
    </div>
  );
}

export default function RestaurantePage() {
  return (
    <>
      <PageHero
        icon={UtensilsCrossed}
        titulo="Restaurante"
        descricao={"Pratos frescos preparados com carinho.\nPeixe direto do lago, porções generosas\ne sabores que fazem você voltar sempre."}
        imagem="/hero_restaurante.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-14">
        <section>
          <SectionTitle>Entrada Especial</SectionTitle>
          <p className="text-sm text-texto-suave mb-4">Sabor de dar água na boca</p>
          {cardapio.entradas.map((item) => (
            <MenuRow key={item.nome} nome={item.nome} descricao={item.descricao} preco={item.preco} />
          ))}
        </section>

        <section>
          <SectionTitle>Porções</SectionTitle>
          <p className="text-sm text-azul-medio font-semibold mb-4 bg-azul-pale inline-block px-3 py-1 rounded-full border border-azul-borda">
            {cardapio.porcoes.nota}
          </p>
          <div>
            {cardapio.porcoes.itens.map((item) => (
              <MenuRow key={item.nome} nome={item.nome} preco={item.preco} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Acompanhamentos</SectionTitle>
          <p className="text-sm text-texto-suave mb-4">Complemento perfeito para as porções</p>
          {cardapio.acompanhamentos.map((item) => (
            <MenuRow key={item.nome} nome={item.nome} descricao={item.descricao} preco={item.preco} />
          ))}
        </section>

        <section>
          <SectionTitle>Lanches</SectionTitle>
          {cardapio.lanches.map((item) => (
            <MenuRow key={item.nome} nome={item.nome} descricao={item.descricao} preco={item.preco} />
          ))}
        </section>

        <section>
          <SectionTitle>Salgados</SectionTitle>
          {cardapio.salgados.map((item) => (
            <MenuRow key={item.nome} nome={item.nome} descricao={item.descricao} preco={item.preco} />
          ))}
        </section>

        <section>
          <SectionTitle>Sobremesas</SectionTitle>
          {cardapio.sobremesas.map((item) => (
            <MenuRow key={item.nome} nome={item.nome} preco={item.preco} precoTexto={(item as any).precoTexto} />
          ))}
        </section>

        <hr className="border-cinza-borda" />

        <section>
          <SectionTitle>Bebidas</SectionTitle>
          {cardapio.bebidas.map((item) => (
            <MenuRow key={item.nome} nome={item.nome} descricao={"descricao" in item ? item.descricao : undefined} preco={item.preco} />
          ))}
        </section>

        <section>
          <SectionTitle>Cervejas</SectionTitle>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-azul-borda">
                  <th className="text-left py-2 font-semibold text-texto">Marca</th>
                  <th className="text-right py-2 font-semibold text-texto">Lata</th>
                  <th className="text-right py-2 font-semibold text-texto">Garrafa</th>
                </tr>
              </thead>
              <tbody>
                {cardapio.cervejas.map((item) => (
                  <tr key={item.nome} className="border-b border-cinza-borda hover:bg-cinza-bg transition-colors">
                    <td className="py-3 font-medium text-texto">{item.nome}</td>
                    <td className="py-3 text-right text-azul-medio font-semibold">{item.lata ? formatPrice(item.lata) : "—"}</td>
                    <td className="py-3 text-right text-azul-medio font-semibold">{item.garrafa ? formatPrice(item.garrafa) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <SectionTitle>Drinks</SectionTitle>
          <div>
            {cardapio.drinks.map((item) => {
              if ("opcoes" in item) {
                return (
                  <div key={item.nome} className="py-3 border-b border-cinza-borda">
                    <div>
                      <span className="font-semibold text-texto">{item.nome}</span>
                      {item.descricao && <p className="text-sm text-texto-suave mt-0.5">{item.descricao}</p>}
                    </div>
                    <div className="mt-2 pl-4 space-y-1">
                      {item.opcoes!.map((op) => (
                        <div key={op.tipo} className="flex justify-between text-sm">
                          <span className="text-texto-suave">{op.tipo}</span>
                          <span className="text-azul-medio font-bold">{formatPrice(op.preco)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <MenuRow key={item.nome} nome={item.nome} descricao={"descricao" in item ? item.descricao : undefined} preco={"preco" in item ? item.preco : 0} />
              );
            })}
          </div>
        </section>

        <section>
          <SectionTitle>Doses</SectionTitle>
          {cardapio.doses.map((item) => (
            <MenuRow key={item.nome} nome={item.nome} preco={item.preco} />
          ))}
        </section>
      </div>
    </>
  );
}
