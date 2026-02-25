import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-baby.jpg";
import Reviews from "./Reviews";

const steps = [
  {
    icon: "📋",
    title: "Alegi modul de start",
    desc: "Cu selecție ghidată sau prin analiză individuală — în funcție de cum preferi să alegi.",
  },
  {
    icon: "🎯",
    title: "Stabilim selecția",
    desc: "Identificăm jucăriile potrivite vârstei și etapei de dezvoltare a copilului tău.",
  },
  {
    icon: "📦",
    title: "Primești cutia",
    desc: "Jucării alese atent, însoțite de un ghid cu recomandări.",
  },
  {
    icon: "🔄",
    title: "Rotație lunară",
    desc: "După o lună, organizăm returul și continuăm cu o nouă selecție adaptată progresului copilului.",
  },
];

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Copil jucându-se" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <span className="inline-block bg-transparent text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6 drop-shadow-sm">
          🧸 Abonament lunar de jucării educative
        </span>
        <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-4 text-foreground">
          Jucării educative,<br />
          <span className="text-primary whitespace-nowrap">prin abonament lunar</span>
        </h1>
        <p className="text-lg text-foreground font-medium drop-shadow-sm">
          Adaptate vârstei și etapei de dezvoltare.
        </p>
      </motion.div>
    </div>
  </section>
);

const WhatIsJucaBox = () => (
  <section id="ce-este-jucabox" className="pt-24 pb-12">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-foreground">Ce este JucaBox Baby</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            JucaBox Baby este un serviciu de închiriere a jucăriilor educative, creat pentru părinți care își doresc materiale potrivite vârstei și etapei de dezvoltare a copilului lor.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Prin rotație lunară, copilul are acces constant la jucării adaptate progresului său, iar părinții scapă de presiunea alegerii, de spațiul ocupat și de acumularea unor jucării folosite doar pentru o perioadă scurtă.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Accentul nostru nu este pe cantitate, ci pe <strong className="text-foreground">potrivire, sens și continuitate</strong>. JucaBox Baby funcționează ca un serviciu ghidat, în care selecțiile sunt realizate cu atenție la vârstă, interes și evoluție.
          </p>
          <Link
            to="/pachete"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-bold hover:opacity-90 transition-opacity"
          >
            Vezi Pachetele
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="cum-functioneaza" className="pt-12 pb-12 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Cum funcționează</h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">Cum funcționează, pas cu pas:</p>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center text-3xl mx-auto mb-4">{step.icon}</div>
            <div className="w-8 h-1 bg-primary rounded-full mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="pt-12 pb-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/10 rounded-3xl p-8">
          <span className="text-4xl mb-4 block">🎯</span>
          <h3 className="font-heading font-black text-xl mb-3 text-foreground">Vrei o selecție adaptată copilului tău?</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Dacă simți că ai nevoie de ghidare sau vrei să pornim de la nevoile copilului tău, poți solicita formularul de selecție personalizată.
          </p>
          <Link to="/selectie" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
            SOLICITĂ FORMULARUL
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-secondary/20 rounded-3xl p-8">
          <span className="text-4xl mb-4 block">📖</span>
          <h3 className="font-heading font-black text-xl mb-3 text-foreground">Solicită catalogul</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Dacă preferi să analizezi singur tipurile de jucării folosite în cadrul serviciului, poți solicita catalogul nostru.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/37378675575?text=Bună, aș dori catalogul JucaBox Baby." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] text-primary-foreground px-5 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
              WhatsApp
            </a>
            <a href="viber://chat?number=37378675575&text=Bună, aș dori catalogul JucaBox Baby." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(270,60%,55%)] text-primary-foreground px-5 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
              Viber
            </a>
            <a href="https://t.me/+37378675575?text=Bună, aș dori catalogul JucaBox Baby." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(200,80%,50%)] text-primary-foreground px-5 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const HygieneSection = () => (
  <section id="igienizare" className="py-12 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-foreground">
            Igienizare și siguranță
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Fiecare jucărie este verificată, curată și igienizată între utilizări, metode adecvate vârstei copiilor și materialelor din care sunt realizate.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <em>Siguranța și starea jucăriilor sunt o prioritate în fiecare rotație.</em>
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <WhatIsJucaBox />
    <HowItWorks />
    <CTASection />
    <HygieneSection />
    <Reviews />
  </>
);

export default Home;
