"use client";

import Link from "next/link";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { navigation, footerContent, contactContent, siteConfig } from "@/content/mockData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--neutral-grafite)] text-[var(--earth-areia)]">
      {/* Main Footer */}
      <div className="container-franciscan section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl text-[var(--special-dourado)] font-serif">τ</span>
              <div>
                <h3 className="font-serif text-xl text-[var(--earth-areia)]">
                  {siteConfig.name}
                </h3>
                <p className="text-sm text-[var(--neutral-pedra)]">
                  {siteConfig.province}
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--neutral-pedra)] leading-relaxed mb-6">
              {footerContent.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vocacaofranciscanaofm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--nature-musgo)]/50 flex items-center justify-center hover:bg-[var(--nature-folhagem)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/c/EscolaFranciscanadeTeologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--nature-musgo)]/50 flex items-center justify-center hover:bg-[var(--nature-folhagem)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/franciscanosPSC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--nature-musgo)]/50 flex items-center justify-center hover:bg-[var(--nature-folhagem)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[var(--earth-areia)]">
              Sobre Nós
            </h4>
            <ul className="space-y-3">
              {footerContent.links.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-pedra)] hover:text-[var(--special-dourado)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-[var(--earth-areia)]">
              Vida Franciscana
            </h4>
            <ul className="space-y-3">
              {footerContent.links.life.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--neutral-pedra)] hover:text-[var(--special-dourado)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-[var(--earth-areia)]">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[var(--special-dourado)] flex-shrink-0" />
                <span className="text-sm text-[var(--neutral-pedra)]">
                  {contactContent.address.street}
                  <br />
                  {contactContent.address.neighborhood}
                  <br />
                  {contactContent.address.city} - {contactContent.address.state}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--special-dourado)] flex-shrink-0" />
                <span className="text-sm text-[var(--neutral-pedra)]">
                  {contactContent.phones[0].number}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--special-dourado)] flex-shrink-0" />
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-sm text-[var(--neutral-pedra)] hover:text-[var(--special-dourado)] transition-colors"
                >
                  {contactContent.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--nature-musgo)]/30">
        <div className="container-franciscan py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[var(--neutral-pedra)]">
              © {currentYear} Ordem dos Frades Menores - Província Santa Cruz. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {footerContent.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-[var(--neutral-pedra)] hover:text-[var(--special-dourado)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
