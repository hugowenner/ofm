"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Heart,
  BookOpen,
  Globe,
  Users,
  ChevronRight,
  Quote,
} from "lucide-react";

const TAU_SRC = "/patterns/tau-pattern.svg";

const TauSymbol = ({
  className = "",
  imageClassName = "",
}: {
  className?: string;
  imageClassName?: string;
}) => (
  <span className={`relative block ${className}`} aria-hidden="true">
    <Image
      src={TAU_SRC}
      alt=""
      fill
      sizes="300px"
      className={`object-contain ${imageClassName}`}
    />
  </span>
);

const TauIcon = ({ className }: { className?: string }) => (
  <TauSymbol className={className} />
);

const timelineData = [
  {
    year: "1899",
    title: "Chegada à Amazônia",
    description:
      "Os primeiros frades holandeses desembarcam em Manaus. Um início de coragem.",
    location: "Manaus, AM",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    year: "1900",
    title: "Chegada ao RJ",
    description: "Chegada de Frei Rogério Burgers e Frei Frederico Voorvelt.",
    location: "Rio de Janeiro",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    year: "1901",
    title: "Sede em Niterói",
    description: "Instalação da primeira residência e sede do Comissariado.",
    location: "Niterói, RJ",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    year: "1903",
    title: "Enraizamento em Minas",
    description: "Instalação da primeira residência em Ouro Preto.",
    location: "Ouro Preto, MG",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    year: "1912",
    title: "Mudança para SJ del-Rei",
    description:
      "A sede do Comissariado é transferida para São João del-Rei.",
    location: "São João del-Rei",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    year: "1925",
    title: "Sede em Divinópolis",
    description: "Transferência da sede para Divinópolis.",
    location: "Divinópolis, MG",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    year: "1931",
    title: "Formação em Teologia",
    description: "Início do Curso de Teologia em Divinópolis.",
    location: "Divinópolis, MG",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    year: "1949",
    title: "Autonomia da Província",
    description:
      "Elevado a Província autônoma, passa a se chamar Província Santa Cruz.",
    location: "Brasil",
    icon: <AwardIcon className="w-5 h-5" />,
  },
  {
    year: "1959",
    title: "Sede em Belo Horizonte",
    description: "Transferência da sede provincial para a capital mineira.",
    location: "Belo Horizonte",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    year: "1976",
    title: "Autonomia no RS",
    description: "Constituição da Província São Francisco de Assis no RS.",
    location: "Rio Grande do Sul",
    icon: <Users className="w-5 h-5" />,
  },
  {
    year: "Hoje",
    title: "Presença Viva",
    description: "100 frades em 13 fraternidades, vivendo o Evangelho.",
    location: "Minas e Bahia",
    icon: <TauIcon className="w-5 h-5" />,
  },
];

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

const OliveBranch = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => (
  <svg
    viewBox="0 0 260 180"
    fill="none"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path
      d="M18 138 C58 104 86 82 126 69 C168 56 205 34 238 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.55"
    />

    {[
      [56, 108, -28],
      [78, 94, 24],
      [104, 78, -25],
      [132, 66, 22],
      [160, 54, -23],
      [190, 38, 20],
      [218, 22, -18],
    ].map(([cx, cy, rotate], index) => (
      <ellipse
        key={index}
        cx={cx}
        cy={cy}
        rx="15"
        ry="5"
        fill="currentColor"
        opacity="0.22"
        transform={`rotate(${rotate} ${cx} ${cy})`}
      />
    ))}

    <path
      d="M36 148 C62 132 91 127 118 132"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      opacity="0.25"
    />
    <path
      d="M52 154 C76 145 96 145 120 151"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.2"
    />
  </svg>
);

const WatercolorStain = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" className={className} aria-hidden="true">
    <filter id="soft-watercolor">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.018"
        numOctaves="3"
        seed="8"
      />
      <feDisplacementMap in="SourceGraphic" scale="18" />
      <feGaussianBlur stdDeviation="6" />
    </filter>

    <path
      d="M125 18 C177 17 221 53 222 109 C223 165 184 216 123 218 C62 220 18 177 20 116 C22 57 72 20 125 18Z"
      fill="currentColor"
      opacity="0.18"
      filter="url(#soft-watercolor)"
    />
  </svg>
);

const DottedCurve = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 760 260"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M34 186 C154 54 282 46 392 126 C502 206 622 202 728 76"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 14"
      opacity="0.35"
    />
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const floatTau = {
  animate: {
    y: [0, -14, 0],
    rotate: [0, 2.5, 0],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function TimeLine() {
  return (
    <section className="relative overflow-hidden bg-[#F9F6F0] text-[#3E2C1C] selection:bg-[#5A3E2B]/20 selection:text-[#5A3E2B]">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#FFFDF8_0%,#F9F6F0_42%,#F3EBDD_100%)]" />

        <motion.div
          variants={floatTau}
          animate="animate"
          className="absolute -left-24 top-10 opacity-[0.055]"
        >
          <TauSymbol className="h-[520px] w-[520px]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-40px] top-[16%] opacity-[0.055]"
        >
          <TauSymbol className="h-[310px] w-[310px]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[18%] left-[8%] opacity-[0.05]"
        >
          <TauSymbol className="h-32 w-32" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[34%] right-[18%] opacity-[0.045]"
        >
          <TauSymbol className="h-24 w-24" />
        </motion.div>

        <div className="absolute -top-16 -right-12 h-[360px] w-[360px] text-[#D2B48C]/45">
          <WatercolorStain className="h-full w-full" />
        </div>

        <div className="absolute bottom-[-80px] -left-20 h-[430px] w-[430px] text-[#C9A86A]/35">
          <WatercolorStain className="h-full w-full" />
        </div>

        <div className="absolute top-[42%] right-[10%] h-[260px] w-[260px] text-[#D2B48C]/25">
          <WatercolorStain className="h-full w-full" />
        </div>

        {/* NEW: Organic Curves (Item 2) */}
        <div className="absolute top-[60%] left-[20%] w-[600px] opacity-20">
          <DottedCurve />
        </div>
        <div className="absolute top-[30%] right-[15%] w-[500px] opacity-15 rotate-180">
          <DottedCurve />
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="absolute left-0 top-0 hidden h-52 w-52 text-[#8B6F47]/35 md:block">
          <OliveBranch className="h-full w-full" />
        </div>

        <div className="absolute right-0 top-10 hidden h-48 w-48 rotate-12 scale-x-[-1] text-[#8B6F47]/30 md:block">
          <OliveBranch className="h-full w-full" />
        </div>

        {/* NEW: Olive Branches (Item 6) */}
        <div className="absolute bottom-[-40px] left-[10%] h-32 w-32 opacity-20">
          <OliveBranch />
        </div>
        <div className="absolute bottom-[-30px] right-[12%] h-28 w-28 opacity-15 scale-x-[-1]">
          <OliveBranch />
        </div>

        <DottedCurve className="absolute left-1/2 top-20 hidden w-[760px] -translate-x-1/2 text-[#8B6F47]/30 md:block" />

        <div className="container-franciscan relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B48C]/35 bg-[#FDFBF7]/80 shadow-[0_10px_30px_rgba(90,62,43,0.08)]"
            >
              <TauSymbol className="h-7 w-7 opacity-75" />
            </motion.div>

            <span className="inline-block rounded-full border border-[#D2B48C]/35 bg-[#F5EFE6]/90 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#5A3E2B] shadow-sm">
              Nossa História
            </span>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#2C1A12] md:text-7xl lg:text-8xl">
              A Província
              <br />
              Santa Cruz
            </h1>

            <p className="mx-auto max-w-2xl font-serif text-xl italic leading-relaxed text-[#6B5544] md:text-2xl">
              Raízes holandesas, presença brasileira, caminho franciscano.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18 }}
            className="relative mx-auto mt-10 max-w-3xl md:mt-12"
          >
            <div className="absolute -left-8 -top-8 hidden h-24 w-24 text-[#8B6F47]/25 md:block">
              <OliveBranch className="h-full w-full" />
            </div>

            <div className="absolute -right-6 bottom-2 hidden h-20 w-20 -rotate-12 scale-x-[-1] text-[#8B6F47]/20 md:block">
              <OliveBranch className="h-full w-full" />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#E6DED3] bg-[#FDFBF7]/95 px-7 py-9 shadow-[0_22px_60px_-32px_rgba(44,26,18,0.35)] backdrop-blur-sm md:px-12 md:py-11">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(210,180,140,0.16),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(139,111,71,0.10),transparent_32%)]" />

              <div className="absolute -right-14 -bottom-16 opacity-[0.045]">
                <TauSymbol className="h-56 w-56" />
              </div>

              <Quote className="absolute left-6 top-6 h-11 w-11 text-[#D2B48C]/35" />

              <div className="relative z-10 mx-auto mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5EFE6]">
                <TauSymbol className="h-5 w-5 opacity-80" />
              </div>

              <p className="relative z-10 font-serif text-xl font-medium leading-relaxed text-[#3E2C1C] md:text-3xl">
                A Ordem dos Frades Menores é uma fraternidade de irmãos que
                seguem Jesus Cristo no caminho de São Francisco.
              </p>

              <div className="relative z-10 mt-6 flex justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D2B48C] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="relative z-10 border-t border-[#E6DED3]/60 bg-transparent py-14 md:py-20">
        <div className="container-franciscan relative z-10 mb-12 px-4 text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="mb-4 flex items-center justify-center gap-4 font-serif text-3xl font-bold text-[#2C1A12] md:text-4xl">
              <span className="text-2xl text-[#D2B48C]">❧</span>
              Caminho de Fé
              <span className="text-2xl text-[#D2B48C]">❧</span>
            </h2>

            <p className="font-serif text-sm italic text-[#6B5544] md:text-base">
              Percorra nossa história através dos anos
            </p>
          </motion.div>
        </div>

        <div className="relative w-full">
          
          <div className="hide-scrollbar cursor-grab overflow-x-auto px-4 pb-20 pt-14 active:cursor-grabbing md:px-20">
            <div className="relative mx-auto flex min-w-max flex-row justify-start gap-12 pr-32 md:justify-center md:gap-20 md:pl-0">
              
              {/* NEW: Richer Path (Item 1) */}
              <div className="pointer-events-none absolute left-0 top-[88px] z-0 h-[4px] w-[2600px] md:top-[96px] md:w-[3400px]">
                {/* linha base */}
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#8B6F47]/20" />

                {/* glow */}
                <div className="absolute left-0 top-1/2 h-[6px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C9A86A]/60 to-transparent blur-md" />

                {/* trilha pontilhada */}
                <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgba(139,111,71,0.6)_0_6px,transparent_6px_18px)]" />

                {/* partículas */}
                {[0, 1, 2, 3].map((dot) => (
                  <motion.span
                    key={dot}
                    animate={{ x: ["0px", "2600px"] }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                      delay: dot * 5,
                    }}
                    className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#C9A86A] shadow-[0_0_12px_rgba(201,168,106,0.9)]"
                  />
                ))}
              </div>

              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.62, delay: index * 0.06 }}
                  className="group relative flex w-[85vw] shrink-0 snap-start flex-col items-center md:w-[360px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    className="relative z-10 mb-8"
                  >
                    {/* NEW: Vivid Marker Glow (Item 5) */}
                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A86A]/25 blur-xl transition-all duration-300 group-hover:bg-[#C9A86A]/35" />

                    <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-10 transition-all duration-300 group-hover:scale-110 group-hover:opacity-20">
                      <TauSymbol className="h-28 w-28" />
                    </div>

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#FDFBF7] bg-[#5A3E2B] text-[#F9F6F0] shadow-[0_16px_40px_-18px_rgba(44,26,18,0.65)] transition-all duration-300 group-hover:shadow-[0_0_28px_rgba(201,168,106,0.65)] md:h-20 md:w-20">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* NEW: Premium Hover (Item 4) */}
                  <motion.div whileHover={{ y: -10, scale: 1.02 }} className="relative w-full">
                    <div className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[1.75rem] border border-[#E6DED3] bg-[#FDFBF7]/95 p-8 shadow-[0_22px_55px_-34px_rgba(44,26,18,0.42)] transition-all duration-300 hover:border-[#D2B48C]/70 hover:shadow-[0_30px_80px_-30px_rgba(44,26,18,0.55)]">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8B6F47]/75 via-[#C9A86A]/70 to-[#D2B48C]/65 opacity-70" />

                      <div className="absolute -bottom-12 -right-12 opacity-[0.055]">
                        <TauSymbol className="h-52 w-52" />
                      </div>

                      {/* NEW: Stronger Tau on Cards (Item 3) */}
                      <div className="absolute right-4 top-4 h-16 w-16 opacity-[0.08] group-hover:opacity-[0.15] transition">
                        <TauSymbol className="h-full w-full" />
                      </div>

                      <span className="relative z-10 mb-4 block font-serif text-4xl font-black leading-none tracking-tight text-[#5A3E2B] transition-colors group-hover:text-[#8B6F47] md:text-5xl">
                        {item.year}
                      </span>

                      <h3 className="relative z-10 mb-4 font-serif text-xl font-bold leading-tight text-[#2C1A12] md:text-2xl">
                        {item.title}
                      </h3>

                      <p className="relative z-10 mb-7 flex-grow text-base font-light leading-relaxed text-[#5D4E3C]">
                        {item.description}
                      </p>

                      {item.location && (
                        <div className="relative z-10 mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#E6DED3] bg-[#F5EFE6] px-4 py-2">
                          <MapPin className="h-4 w-4 text-[#8B6F47]" />
                          <span className="text-xs font-bold uppercase tracking-widest text-[#6B5544]">
                            {item.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pb-8 text-center opacity-55">
            <p className="flex items-center justify-center gap-2 font-serif text-[10px] uppercase tracking-[0.2em] text-[#5A3E2B] md:text-xs">
              Arraste para acompanhar a história
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="h-3 w-3" />
              </motion.span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 overflow-hidden border-t border-[#E6DED3]/60 bg-[#FDFBF7] py-24">
        <div className="absolute bottom-0 right-0 opacity-[0.035]">
          <TauSymbol className="h-96 w-96" />
        </div>

        <div className="absolute bottom-0 left-0 hidden h-52 w-52 text-[#8B6F47]/20 md:block">
          <OliveBranch className="h-full w-full" />
        </div>

        <div className="container-franciscan relative z-10 mx-auto max-w-2xl px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 font-serif text-3xl font-bold text-[#2C1A12] md:text-4xl"
          >
            Venha conhecer nosso caminho
          </motion.h2>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#presencas"
              className="inline-flex items-center justify-center rounded-lg bg-[#5A3E2B] px-10 py-4 font-medium text-[#FDFBF7] shadow-lg shadow-[#5A3E2B]/15 transition-all duration-300 hover:bg-[#4A3323]"
            >
              Conheça nossas presenças
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contato"
              className="inline-flex items-center justify-center rounded-lg border border-[#5A3E2B]/10 bg-[#F9F6F0] px-10 py-4 font-medium text-[#5A3E2B] transition-all duration-300 hover:border-[#D2B48C]/30 hover:bg-[#E6DED3]"
            >
              Fale conosco
            </motion.a>
          </div>
        </div>
      </section>
    </section>
  );
}