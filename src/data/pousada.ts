export const tarifas = [
  { periodo: "Segunda a quinta", preco: 160, destaque: false },
  { periodo: "Sexta, sábado e domingo", preco: 180, destaque: true },
  { periodo: "Feriados e datas comemorativas", preco: 200, destaque: false },
];

export const tarifaCriancas = [
  { faixa: "0 a 5 anos", valor: "Gratuito (cortesia)" },
  { faixa: "6 a 12 anos", valor: "50% da diária" },
  { faixa: "13 anos ou mais", valor: "Valor integral" },
];

export const incluso = {
  refeicoes: ["Café da manhã (8h às 10h)"],
  lazer: [
    "Pescaria (diurna + noturna)",
    "Piscina",
    "Campo de futebol",
    "Salão de jogos",
    "Parquinho",
    "Espaço para caminhada",
    "Redes para descanso",
  ],
  acomodacoes: [
    "Ar condicionado",
    "Wi-fi",
    "TV a cabo",
    "Frigobar",
    "Secador de cabelo",
    "Roupa de cama e toalhas",
  ],
};

export const politicaReserva = {
  checkIn: "16h",
  checkOut: "14h",
  checkInObs: "Hóspedes podem chegar mais cedo para pescar, mas acessam a pousada apenas no horário do check-in.",
  cancelamento: "Com 5 dias de antecedência ou mais: reembolso total ou remarcação sem custo.",
  pagamento: "Sinal de 30% antecipado via depósito, transferência ou Pix. Restante acertado no check-in, parcelável em até 3×.",
  pet: { permitido: true, taxa: 30, obs: "Coleira obrigatória. Pets não podem permanecer sozinhos no quarto. Danos ao quarto serão cobrados." },
  alimentacaoObs: "Restaurante disponível para almoço e jantar até as 18h. Após esse horário, opção de delivery da cidade. Não é permitido o preparo de alimentos na pousada nem trazer churrasqueiras, panelas elétricas ou similares. Toalhas de banho não devem ser usadas na piscina — trazer de casa.",
};
