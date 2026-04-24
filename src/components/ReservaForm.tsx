"use client";

import { useState } from "react";
import { Calendar, Users, User, Phone, MessageSquare } from "lucide-react";

export default function ReservaForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    checkin: "",
    checkout: "",
    pessoas: "2",
    observacoes: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const mensagem =
      `Olá! Gostaria de fazer uma reserva:\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*Check-in:* ${form.checkin}\n` +
      `*Check-out:* ${form.checkout}\n` +
      `*Pessoas:* ${form.pessoas}\n` +
      (form.observacoes ? `*Observações:* ${form.observacoes}` : "");

    const url = `https://wa.me/5515996040640?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  const inputClass =
    "w-full border border-cinza-borda rounded-lg px-4 py-3 text-texto bg-white focus:outline-none focus:ring-2 focus:ring-azul-claro/50 focus:border-azul-claro transition-colors placeholder:text-texto/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-texto mb-1">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> Seu nome
            </span>
          </label>
          <input
            type="text"
            name="nome"
            required
            placeholder="João da Silva"
            value={form.nome}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-texto mb-1">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" /> WhatsApp
            </span>
          </label>
          <input
            type="tel"
            name="telefone"
            required
            placeholder="(15) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-texto mb-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Check-in
            </span>
          </label>
          <input
            type="date"
            name="checkin"
            required
            value={form.checkin}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-texto mb-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Check-out
            </span>
          </label>
          <input
            type="date"
            name="checkout"
            required
            value={form.checkout}
            onChange={handleChange}
            min={form.checkin || new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-texto mb-1">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" /> Número de pessoas
          </span>
        </label>
        <select
          name="pessoas"
          value={form.pessoas}
          onChange={handleChange}
          className={inputClass}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "pessoa" : "pessoas"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-texto mb-1">
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" /> Observações{" "}
            <span className="font-normal text-texto/40">(opcional)</span>
          </span>
        </label>
        <textarea
          name="observacoes"
          rows={3}
          placeholder="Preferências de chalé, necessidades especiais, etc."
          value={form.observacoes}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-azul-medio text-white font-bold py-4 rounded-lg text-lg hover:bg-azul-claro transition-colors flex items-center justify-center gap-2"
      >
        Enviar pelo WhatsApp
      </button>
      <p className="text-xs text-center text-texto/40">
        Você será redirecionado para o WhatsApp com os dados preenchidos.
        A reserva é confirmada após retorno da nossa equipe.
      </p>
    </form>
  );
}
