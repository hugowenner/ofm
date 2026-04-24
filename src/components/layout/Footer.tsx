"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactContent } from "@/content/mockData";

export function Footer() {
  const quickLinks = [
    { name: "A Província", href: "#provincia-santa-cruz" },
    { name: "Vocações", href: "#vocacao" },
    { name: "Vida e Missão", href: "#vida-e-missao" },
    { name: "Reflexões", href: "#reflexoes" },
    { name: "Contato", href: "#fale-conosco" },
  ];

  return (
    <footer className="bg-[#5A3E2B] text-white">
      <div className="container-franciscan py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo02.png"
                alt="Frades Menores - Província Santa Cruz"
                width={32}
                height={32}
                className="h-8 w-8 object-contain shrink-0"
              />
              <div>
                <h3 className="font-serif text-lg font-bold leading-tight text-white">
                  Frades Menores
                </h3>
                <p className="text-xs uppercase tracking-[0.12em] text-white font-bold">
                  Província Santa Cruz
                </p>
              </div>
            </div>
            <p className="max-w-[34ch] text-white leading-relaxed font-medium">
              Presença franciscana no Brasil, vivida na simplicidade, fraternidade e serviço.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Explorar</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white font-medium transition-all duration-300 ease-out hover:translate-x-1 hover:text-white/90 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Contato</h4>
            <ul className="space-y-2 text-white font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-white shrink-0" />
                <span>
                  {contactContent.address.street}
                  <br />
                  {contactContent.address.neighborhood}
                  <br />
                  {contactContent.address.city} - {contactContent.address.state}
                  <br />
                  CEP: {contactContent.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a
                  href={`tel:${contactContent.phones[0].number.replace(/\D/g, "")}`}
                  className="transition-all duration-300 ease-out hover:translate-x-1 hover:text-white/90 inline-block"
                >
                  {contactContent.phones[0].number}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a
                  href={`mailto:${contactContent.email}`}
                  className="transition-all duration-300 ease-out hover:translate-x-1 hover:text-white/90 inline-block"
                >
                  {contactContent.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-franciscan py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-center md:text-left text-white font-medium">
              © 2026 Ordem dos Frades Menores – Província Santa Cruz
            </p>
            <div className="flex items-center gap-5">
              <Link 
                href="#privacidade" 
                className="text-white font-medium transition-all duration-300 ease-out hover:translate-x-1 hover:text-white/90 inline-block"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="#termos" 
                className="text-white font-medium transition-all duration-300 ease-out hover:translate-x-1 hover:text-white/90 inline-block"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}