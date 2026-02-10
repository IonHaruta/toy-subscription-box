import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-baby.jpg";

const steps = [
  { icon: "📋", title: "Alegi modul de start", desc: "Cu selecție ghidată sau prin analiză individuală." },
  { icon: "🎯", title: "Stabilim selecția", desc: "Jucării potrivite vârstei copilului tău." },
  { icon: "📦", title: "Primești cutia", desc: "Jucării + recomandări pentru utilizare." },
  { icon: "🔄", title: "Rotație lunară", desc: "Retur și rotație cu alte materiale." },
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
          <Link to="/selectie" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-bold hover:opacity-90 transition-opacity">
            Selecție personalizată
          </Link>
          <Link to="/pachete" className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-heading font-bold hover:bg-primary/10 transition-colors">
            Vezi pachetele
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhatIsJucaBox = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 text-foreground">Ce este JucaBox Baby</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            JucaBox Baby este un serviciu de închiriere a jucăriilor educative, gândit pentru părinți care își doresc materiale potrivite vârstei copilului.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Prin rotație lunară, copilul are acces constant la jucării adaptate etapei sale de dezvoltare, iar părinții scapă de stresul alegerii, al spațiului ocupat și al jucăriilor folosite doar pentru o perioadă scurtă.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Accentul nostru nu este pe cantitate, ci pe <strong className="text-foreground">potrivire, sens și continuitate</strong>. JucaBox Baby funcționează ca un serviciu ghidat, în care selecțiile sunt făcute cu atenție la vârstă, interese și progres.
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

const HowItWorks = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Cum funcționează</h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">Simplu, fără griji — doar bucuria jocului</p>
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
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/10 rounded-3xl p-8">
          <span className="text-4xl mb-4 block">🎯</span>
          <h3 className="font-heading font-black text-xl mb-3 text-foreground">Vrei o selecție adaptată copilului tău?</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Dacă simți că ai nevoie de ghidare sau vrei să pornim de la nevoile copilului tău, poți solicita formularul de selecție personalizată.
          </p>
          <Link to="/selectie" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
            👉 Solicită formularul de selecție
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

const Home = () => (
  <>
    <Hero />
    <WhatIsJucaBox />
    <HowItWorks />
    <CTASection />
  </>
);

export default Home;
