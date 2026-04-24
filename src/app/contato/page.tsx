import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ContatoPage() {
  return (
    <>
      <PageHero
        icon={Phone}
        titulo="Contato"
        descricao="Estamos em Cesário Lange, São Paulo. Fácil acesso pela Rodovia Castelo Branco. Venha nos visitar!"
        imagem="/hero_como chegar.jpg"
      />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-texto mb-2">Informações de Contato</h2>
              <div className="w-10 h-1 bg-azul-medio mb-6 rounded-full" />
              <ul className="space-y-5">
                {[
                  { icon: MapPin, label: "Endereço", content: "Estrada Municipal Cesário Lange a Pereiras, s/n.\nBairro Boiadeiro — Cesário Lange/SP" },
                  { icon: Phone, label: "Telefone / WhatsApp", content: "(15) 99604-0640", href: "tel:+5515996040640" },
                  { icon: Mail, label: "E-mail", content: "pesqueiroperez@hotmail.com", href: "mailto:pesqueiroperez@hotmail.com" },
                  { icon: Clock, label: "Horário", content: "Terça a Domingo: 8h às 18h" },
                ].map(({ icon: Icon, label, content, href }) => (
                  <li key={label} className="flex gap-4">
                    <div className="bg-azul-pale border border-azul-borda rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
                      <Icon className="text-azul-medio w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-texto text-sm mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-texto-suave text-sm hover:text-azul-medio transition-colors">
                          {content}
                        </a>
                      ) : (
                        <p className="text-texto-suave text-sm whitespace-pre-line">{content}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/5515996040640"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#20bd5a] transition-colors"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm h-96 md:h-auto border border-cinza-borda">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5!2d-47.97617!3d-23.19429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c67b3362c8fc5d:0x9d54b28019cf5aa0!2sPesqueiro%20e%20Pousada%20Perez!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Pesqueiro Perez"
            />
          </div>
        </div>
      </div>
    </>
  );
}
