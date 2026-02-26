import { motion } from "framer-motion";

const ageGroups = [
  { range: "0–3 luni", formUrl: "https://forms.gle/fw5jhFkeDy8NE4ne8" },
  { range: "3–12 luni", formUrl: "https://forms.gle/ZZxSYeuRcnHhAEB39" },
  { range: "12–24 luni", formUrl: "https://forms.gle/LATBFYk6ac5eiidj6" },
  { range: "24–36 luni", formUrl: "https://forms.gle/3io3nG2QcGHNpKuB7" },
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
          <div className="flex flex-col gap-2 max-w-xs mx-auto">
            {ageGroups.map((group) => (
              <a
                key={group.range}
                href={group.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg py-3 px-4 border border-border bg-card hover:border-primary hover:bg-primary/5 text-center font-heading font-bold text-foreground transition-all"
              >
                {group.range}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Selection;
