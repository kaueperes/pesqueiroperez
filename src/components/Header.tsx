"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/pesqueiro", label: "Pesqueiro" },
  { href: "/pousada", label: "Pousada" },
  { href: "/restaurante", label: "Restaurante" },
  { href: "/historia", label: "Nossa História" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-cinza-borda">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <Image
            src="/pesqueiro_pousada.png"
            alt="Pesqueiro e Pousada Perez"
            width={200}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => window.scrollTo(0, 0)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-azul-medio bg-azul-pale"
                  : "text-texto-suave hover:text-azul-medio hover:bg-azul-pale"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://www.instagram.com/pesqueiroperez/" target="_blank" rel="noopener noreferrer" className="ml-2 text-texto-suave hover:text-azul-medio transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/pesqperez/" target="_blank" rel="noopener noreferrer" className="text-texto-suave hover:text-azul-medio transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <Link
            href="/pousada#reserva"
            className="ml-3 bg-azul-navy text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors hover:bg-azul-medio"
          >
            Reservar
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-texto p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-cinza-borda px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
              className={`block py-3 border-b border-cinza-borda text-sm font-medium ${
                pathname === link.href ? "text-azul-medio" : "text-texto-suave"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/pousada#reserva"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-azul-navy text-white font-bold text-sm px-4 py-3 rounded-lg text-center"
          >
            Fazer Reserva
          </Link>
        </nav>
      )}
    </header>
  );
}
