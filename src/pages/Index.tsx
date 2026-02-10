import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/hero-baby.jpg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b">
    <div className="container mx-auto flex items-center justify-between py-3 px-4">
      <a href="#" className="flex items-center gap-2">
        <img src={logo} alt="JucaBox Baby" className="h-12 w-12 rounded-full" />
        <span className="font-heading font-extrabold text-xl text-foreground">JucaBox Baby</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-body font-semibold text-sm">
        <a href="#cum-functioneaza" className="text-muted-foreground hover:text-primary transition-colors">Cum funcționează</a>
        <a href="#preturi" className="text-muted-foreground hover:text-primary transition-colors">Prețuri</a>
        <a href="#recenzii" className="text-muted-foreground hover:text-primary transition-colors">Recenzii</a>
        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
      </div>
      <a
        href="#preturi"
        className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Abonează-te
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
        <span className="inline-block bg-primary/15 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          🧸 Abonament lunar de jucării educative
        </span>
        <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight mb-6 text-foreground">
          Jucării educative,<br />
          <span className="text-primary">livrate lunar</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
          Oferă-i copilului tău bucuria de a descoperi jucării noi în fiecare lună — potrivite vârstei, igienizate și rotite cu grijă.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#cum-functioneaza" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-bold hover:opacity-90 transition-opacity">
            Vezi cum funcționează
          </a>
          <a href="#preturi" className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-heading font-bold hover:bg-primary/10 transition-colors">
            Vezi prețurile
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const steps = [
  { icon: "📋", title: "Alegi abonamentul", desc: "Standard sau Premium, pe durata dorită." },
  { icon: "🎯", title: "Stabilim selecția", desc: "Jucării potrivite vârstei copilului tău." },
  { icon: "📦", title: "Primești cutia", desc: "Jucării + recomandări de utilizare, la ușa ta." },
  { icon: "🔄", title: "Rotație lunară", desc: "Returnezi și primești jucării noi în fiecare lună." },
];

const HowItWorks = () => (
  <section id="cum-functioneaza" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Cum funcționează</h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">Simplu, fără griji — doar bucuria jocului</p>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center text-3xl mx-auto mb-4">
              {step.icon}
            </div>
            <div className="w-8 h-1 bg-primary rounded-full mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhatIsJucaBox = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-foreground">Ce este JucaBox Baby?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            JucaBox Baby este un serviciu de închiriere a jucăriilor educative, gândit pentru părinți care își doresc materiale potrivite vârstei copilului.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Accentul nostru este pe <strong className="text-foreground">potrivire, sens și continuitate</strong>. Selecțiile sunt făcute cu atenție la vârstă, interese și progres.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "✨", label: "Igienizare completă" },
              { icon: "🚚", label: "Livrare & retur incluse" },
              { icon: "📈", label: "Adaptate vârstei" },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <span className="font-heading font-bold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const pricingData = [
  { period: "1 lună", discount: null, standard: "500", premium: "750" },
  { period: "3 luni", discount: "-7%", standard: "465", premium: "697,5" },
  { period: "6 luni", discount: "-15%", standard: "425", premium: "637,5" },
  { period: "12 luni", discount: "-20%", standard: "400", premium: "600" },
];

const Pricing = () => (
  <section id="preturi" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Prețurile JucaBox</h2>
        <p className="text-muted-foreground text-lg">Alege pachetul potrivit pentru familia ta</p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Standard */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl p-8 border-2 border-secondary"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-secondary/30 text-secondary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-3">PACHET STANDARD</span>
            <h3 className="font-heading font-black text-2xl text-foreground">3 jucării / lună</h3>
          </div>
          <div className="space-y-4">
            {pricingData.map((row, i) => (
              <div key={i} className="flex items-center justify-between bg-muted rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-foreground">{row.period}</span>
                  {row.discount && (
                    <span className="bg-soft-green/30 text-foreground text-xs font-bold px-2 py-0.5 rounded-full">{row.discount}</span>
                  )}
                </div>
                <span className="font-heading font-black text-xl text-foreground">{row.standard} <span className="text-sm font-semibold text-muted-foreground">MDL{row.period !== "1 lună" ? "/lună" : ""}</span></span>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-8 block text-center bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-heading font-bold hover:opacity-90 transition-opacity">
            Alege Standard
          </a>
        </motion.div>

        {/* Premium */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl p-8 border-2 border-primary relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Recomandat</div>
          <div className="text-center mb-8">
            <span className="inline-block bg-primary/15 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-3">PACHET PREMIUM</span>
            <h3 className="font-heading font-black text-2xl text-foreground">5 jucării / lună</h3>
          </div>
          <div className="space-y-4">
            {pricingData.map((row, i) => (
              <div key={i} className="flex items-center justify-between bg-primary/5 rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-foreground">{row.period}</span>
                  {row.discount && (
                    <span className="bg-soft-green/30 text-foreground text-xs font-bold px-2 py-0.5 rounded-full">{row.discount}</span>
                  )}
                </div>
                <span className="font-heading font-black text-xl text-foreground">{row.premium} <span className="text-sm font-semibold text-muted-foreground">MDL{row.period !== "1 lună" ? "/lună" : ""}</span></span>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-8 block text-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-bold hover:opacity-90 transition-opacity">
            Alege Premium
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 rounded-3xl p-8 text-center"
        >
          <span className="text-4xl mb-4 block">🎯</span>
          <h3 className="font-heading font-black text-xl mb-3 text-foreground">Selecție personalizată</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Solicită formularul de selecție personalizată — adaptăm jucăriile exact pe nevoile copilului tău.
          </p>
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
            Solicită formularul
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-secondary/20 rounded-3xl p-8 text-center"
        >
          <span className="text-4xl mb-4 block">📖</span>
          <h3 className="font-heading font-black text-xl mb-3 text-foreground">Solicită catalogul</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Dacă preferi să analizezi singur tipurile de jucării, poți solicita catalogul nostru complet.
          </p>
          <a href="https://wa.me/37378675575?text=Bună, aș dori catalogul JucaBox Baby." target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
            Solicită catalogul
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const reviews = [
  { name: "Ana M.", text: "Copilul meu abia așteaptă cutia în fiecare lună! Jucăriile sunt mereu potrivite vârstei lui.", stars: 5 },
  { name: "Elena R.", text: "Un serviciu excelent — scăpăm de jucăriile neutilizate și copilul are mereu ceva nou de descoperit.", stars: 5 },
  { name: "Maria P.", text: "Apreciez foarte mult igienizarea și recomandările primite odată cu jucăriile.", stars: 5 },
];

const Reviews = () => (
  <section id="recenzii" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Ce spun părinții</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl p-6 border"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.stars }).map((_, j) => (
                <span key={j} className="text-warm-yellow">★</span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 italic">"{review.text}"</p>
            <p className="font-heading font-bold text-foreground">{review.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-16 border-t">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="JucaBox Baby" className="h-10 w-10 rounded-full" />
            <span className="font-heading font-extrabold text-lg text-foreground">JucaBox Baby</span>
          </div>
          <p className="text-muted-foreground text-sm">Jucării educative, cu rotație lunară, adaptate vârstei copilului tău.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4 text-foreground">Contact</h4>
          <p className="text-muted-foreground text-sm mb-2">📞 +373 786 755 75</p>
          <p className="text-muted-foreground text-sm mb-2">📍 Mun. Chișinău, str. Albișoara 80/11</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4 text-foreground">Navigare</h4>
          <div className="flex flex-col gap-2">
            <a href="#cum-functioneaza" className="text-muted-foreground text-sm hover:text-primary transition-colors">Cum funcționează</a>
            <a href="#preturi" className="text-muted-foreground text-sm hover:text-primary transition-colors">Prețuri</a>
            <a href="#recenzii" className="text-muted-foreground text-sm hover:text-primary transition-colors">Recenzii</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t">
        <p className="text-muted-foreground text-xs">© 2025 TOYSBABY SRL. Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatIsJucaBox />
      <HowItWorks />
      <Pricing />
      <CTASection />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
