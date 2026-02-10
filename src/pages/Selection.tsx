import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ageGroups = [
  { range: "0–3 luni", icon: "👶", desc: "Nou-născuți — stimulare senzorială, contrast vizual" },
  { range: "3–12 luni", icon: "🧒", desc: "Explorare — apucare, texturi, cauză-efect" },
  { range: "12–24 luni", icon: "🧸", desc: "Motricitate fină — stivuire, potrivire, sortare" },
  { range: "24–36 luni", icon: "🎨", desc: "Joc imaginativ — puzzle, joc de rol, construcție" },
];

const Selection = () => {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedAge) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-5xl mb-4 block">🎯</span>
            <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">
              Vrei o selecție adaptată copilului tău?
            </h1>
            <p className="text-muted-foreground text-lg">
              Dacă simți că ai nevoie de ghidare sau vrei să pornim de la nevoile copilului tău, poți solicita formularul de selecție personalizată.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="font-heading font-bold text-xl mb-6 text-foreground text-center">
                Alege vârsta copilului tău:
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {ageGroups.map((group) => (
                  <button
                    key={group.range}
                    onClick={() => setSelectedAge(group.range)}
                    className={`rounded-2xl p-6 border-2 text-left transition-all ${
                      selectedAge === group.range
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <span className="text-3xl mb-2 block">{group.icon}</span>
                    <h3 className="font-heading font-bold text-lg text-foreground">{group.range}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{group.desc}</p>
                  </button>
                ))}
              </div>
              <div className="text-center">
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedAge}
                  className="bg-primary text-primary-foreground px-10 py-6 rounded-full font-heading font-bold text-base hover:opacity-90 transition-opacity"
                >
                  👉 Solicită formularul de selecție
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center bg-card rounded-3xl p-12 border">
              <span className="text-5xl mb-4 block">✅</span>
              <h2 className="font-heading font-black text-2xl mb-4 text-foreground">Mulțumim!</h2>
              <p className="text-muted-foreground text-lg mb-2">
                Ai selectat grupa de vârstă: <strong className="text-foreground">{selectedAge}</strong>
              </p>
              <p className="text-muted-foreground mb-8">
                Vom reveni cu formularul de selecție personalizată. Între timp, ne poți contacta direct:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={`https://wa.me/37378675575?text=Bună, aș dori formularul de selecție personalizată pentru grupa ${selectedAge}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] text-primary-foreground px-5 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
                  WhatsApp
                </a>
                <a href={`viber://chat?number=37378675575&text=Bună, aș dori formularul de selecție personalizată pentru grupa ${selectedAge}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(270,60%,55%)] text-primary-foreground px-5 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
                  Viber
                </a>
                <a href={`https://t.me/+37378675575?text=Bună, aș dori formularul de selecție personalizată pentru grupa ${selectedAge}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(200,80%,50%)] text-primary-foreground px-5 py-3 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity">
                  Telegram
                </a>
              </div>
              <button onClick={() => { setSubmitted(false); setSelectedAge(null); }} className="mt-6 text-primary font-heading font-bold text-sm hover:underline">
                ← Alege altă grupă de vârstă
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Selection;
