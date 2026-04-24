export const pesqueiro = {
  descricao:
    "Venha pescar em um dos pesqueiros mais completos da região de Cesário Lange. Lagos bem cuidados, peixe garantido e estrutura completa para você e sua família passarem um dia inesquecível.",
  especies: ["Pacu", "Tambacu", "Tambaqui", "Patinga", "Catfish", "Carpa", "Piauçu", "Curimbatá", "Dourado", "Pintado", "Traíra", "Matrinxã"],
  taxas: [
    { perfil: "Homem", valor: 30, obs: null },
    { perfil: "Homem aposentado", valor: 15, obs: null },
    { perfil: "Mulher", valor: 0, obs: "Isento" },
    { perfil: "Criança até 10 anos", valor: 0, obs: "Isento" },
  ],
  taxasObs: [
    "Caso queira levar algum peixe, cobramos o valor do quilo à parte.",
    "Desconto de 50% na taxa de pesca ao pescador que levar acima de 5kg de peixe.",
  ],
  regras: [
    { permitido: true,  texto: "Máximo de três varas por pessoa" },
    { permitido: false, texto: "Não utilize anzol com farpa" },
    { permitido: false, texto: "É proibido o uso de chuveirinhos e garatéias" },
    { permitido: false, texto: "Não cruze suas linhas com as dos demais pescadores" },
    { permitido: true,  texto: "Horário: até às 18h (exceto para hóspedes)" },
    { permitido: true,  texto: "Utilize passaguá para tirar o peixe da água" },
    { permitido: false, texto: "Não deixe que o peixe caia ou se bata no chão" },
    { permitido: true,  texto: "Devolva-o ao lago o mais rápido possível" },
    { permitido: false, texto: "Proibido o uso de alicate de contenção (para pesar o peixe, deixe-o no passaguá)" },
    { permitido: false, texto: "Não tire fotos de pé com o peixe — qualquer queda brusca pode causar a morte do animal. Tire fotos sentado ou de joelho." },
  ],
  horario: "Terça a Domingo: 8h às 18h",
  incluso: ["Varas disponíveis para locação", "Iscas disponíveis para compra", "Estacionamento gratuito"],
};
