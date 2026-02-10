import { motion } from "framer-motion";
import { useState } from "react";

const toyExamples: Record<string, { name: string; desc: string; icon: string }[]> = {
  "0–3 luni": [
    { name: "Carusel muzical", desc: "Stimulare vizuală și auditivă", icon: "🎠" },
    { name: "Covoraș de activități", desc: "Explorare senzorială", icon: "🧩" },
    { name: "Jucării cu contrast", desc: "Cartonașe alb-negru pentru dezvoltare vizuală", icon: "🃏" },
    { name: "Zornăitoare texturată", desc: "Apucare și stimulare tactilă", icon: "🔔" },
    { name: "Oglindă moale", desc: "Recunoașterea propriei imagini", icon: "🪞" },
  ],
  "3–12 luni": [
    { name: "Cuburi moi", desc: "Apucare, aruncare, stivuire", icon: "🧱" },
    { name: "Jucărie cauză-efect", desc: "Butoane, lumini, sunete", icon: "🎹" },
    { name: "Cărți texturate", desc: "Explorare tactilă și vizuală", icon: "📚" },
    { name: "Bile senzoriale", desc: "Texturi diferite pentru explorare", icon: "⚽" },
    { name: "Sortator forme simple", desc: "Introducere în potrivire", icon: "🔷" },
  ],
  "12–24 luni": [
    { name: "Puzzle lemn", desc: "Potrivire forme și animale", icon: "🧩" },
    { name: "Stivuitor inele", desc: "Ordonare și motricitate fină", icon: "💍" },
    { name: "Joc de înșirat", desc: "Coordonare ochi-mână", icon: "🧵" },
    { name: "Instrumente muzicale", desc: "Tamburină, xilofon, maracas", icon: "🥁" },
    { name: "Jucărie de sortare", desc: "Forme, culori, dimensiuni", icon: "🔶" },
  ],
  "24–36 luni": [
    { name: "Set construcție lemn", desc: "Construire și joc imaginativ", icon: "🏗️" },
    { name: "Puzzle 12+ piese", desc: "Concentrare și logică", icon: "🧩" },
    { name: "Set joc de rol", desc: "Bucătărie, doctor, atelier", icon: "👩‍🍳" },
    { name: "Plastilină & unelte", desc: "Creativitate și motricitate fină", icon: "🎨" },
    { name: "Joc de echilibru", desc: "Coordonare și răbdare", icon: "⚖️" },
  ],
};

const ageGroups = Object.keys(toyExamples);

const Examples = () => {
  const [activeAge, setActiveAge] = useState(ageGroups[0]);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Exemple de jucării</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exemplele de mai jos sunt extrase din catalogul JucaBox Baby și au rol strict orientativ.
            Ele ilustrează tipurile de jucării utilizate în selecțiile noastre pentru diferite grupe de vârstă.
          </p>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto mt-3 italic">
            Selecțiile finale sunt adaptate copilului și pot varia în funcție de etapă, interese și disponibilitate.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ageGroups.map((age) => (
            <button
              key={age}
              onClick={() => setActiveAge(age)}
              className={`px-5 py-2.5 rounded-full font-heading font-bold text-sm transition-all ${
                activeAge === age
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {age}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {toyExamples[activeAge].map((toy, i) => (
            <motion.div
              key={`${activeAge}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border"
            >
              <span className="text-3xl mb-3 block">{toy.icon}</span>
              <h3 className="font-heading font-bold text-foreground mb-1">{toy.name}</h3>
              <p className="text-muted-foreground text-sm">{toy.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
