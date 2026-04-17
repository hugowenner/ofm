"use client";

import Link from "next/link";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { footerContent, contactContent, siteConfig } from "@/content/mockData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--franciscan-habit)] text-[var(--franciscan-cream)]">
      {/* Main Footer */}
      <div className="container-franciscan section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-[var(--franciscan-cream)] flex items-center justify-center">
                <span className="text-4xl font-serif font-bold text-[var(--franciscan-cord)]">τ</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[var(--franciscan-cream)]">
                  {siteConfig.name}
                </h3>
                <p className="text-sm font-semibold text-[var(--franciscan-sand)]">
                  {siteConfig.province}
                </p>
              </div>
            </div>
            <p className="text-base font-medium text-[var(--franciscan-sand)] leading-relaxed mb-6">
              {footerContent.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vocacaofranciscanaofm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[var(--franciscan-earth)]/80 flex items-center justify-center hover:bg-[var(--franciscan-cord)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/c/EscolaFranciscanadeTeologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[var(--franciscan-earth)]/80 flex items-center justify-center hover:bg-[var(--franciscan-cord)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/franciscanosPSC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[var(--franciscan-earth)]/80 flex items-center justify-center hover:bg-[var(--franciscan-cord)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[var(--franciscan-cord)]">
              Sobre Nós
            </h4>
            <ul className="space-y-3">
              {footerContent.links.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-[var(--franciscan-sand)] hover:text-[var(--franciscan-cord)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[var(--franciscan-cord)]">
              Vida Franciscana
            </h4>
            <ul className="space-y-3">
              {footerContent.links.life.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-[var(--franciscan-sand)] hover:text-[var(--franciscan-cord)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[var(--franciscan-cord)]">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-[var(--franciscan-cord)] flex-shrink-0" />
                <span className="text-base font-medium text-[var(--franciscan-sand)]">
                  {contactContent.address.street}
                  <br />
                  {contactContent.address.neighborhood}
                  <br />
                  {contactContent.address.city} - {contactContent.address.state}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--franciscan-cord)] flex-shrink-0" />
                <span className="text-base font-bold text-[var(--franciscan-cream)]">
                  {contactContent.phones[0].number}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--franciscan-cord)] flex-shrink-0" />
                <a
                  href={`mailto:${contactContent.email}`}
                  className="text-base font-medium text-[var(--franciscan-sand)] hover:text-[var(--franciscan-cord)] transition-colors"
                >
                  {contactContent.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-[var(--franciscan-earth)]">
        <div className="container-franciscan py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium text-[var(--franciscan-sand)]">
              © {currentYear} Ordem dos Frades Menores - Província Santa Cruz. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {footerContent.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[var(--franciscan-sand)] hover:text-[var(--franciscan-cord)] transition-colors"
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
