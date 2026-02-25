import { motion } from "framer-motion";

const ageGroups = [
  { range: "0–3 luni", icon: "👶", desc: "Nou-născuți — stimulare senzorială, contrast vizual", formUrl: "https://forms.gle/fw5jhFkeDy8NE4ne8" },
  { range: "3–12 luni", icon: "🧒", desc: "Explorare — apucare, texturi, cauză-efect", formUrl: "https://forms.gle/ZZxSYeuRcnHhAEB39" },
  { range: "12–24 luni", icon: "🧸", desc: "Motricitate fină — stivuire, potrivire, sortare", formUrl: "https://forms.gle/LATBFYk6ac5eiidj6" },
  { range: "24–36 luni", icon: "🎨", desc: "Joc imaginativ — puzzle, joc de rol, construcție", formUrl: "https://forms.gle/3io3nG2QcGHNpKuB7" },
];

const Selection = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-5xl mb-4 block">🎯</span>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">
            Vrei o selecție adaptată copilului tău?
          </h1>
          <p className="text-muted-foreground text-lg">
            Dacă simți că ai nevoie de ghidare sau vrei să pornim de la nevoile copilului tău, alege vârsta și vei fi dus direct la formularul de selecție.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="font-heading font-bold text-xl mb-6 text-foreground text-center">
            Alege vârsta copilului tău:
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ageGroups.map((group) => (
              <a
                key={group.range}
                href={group.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl p-6 border-2 border-border bg-card hover:border-primary hover:bg-primary/5 text-left transition-all"
              >
                <span className="text-3xl mb-2 block">{group.icon}</span>
                <h3 className="font-heading font-bold text-lg text-foreground">{group.range}</h3>
                <p className="text-muted-foreground text-sm mt-1">{group.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Selection;
