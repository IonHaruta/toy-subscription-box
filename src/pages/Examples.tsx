import { motion } from "framer-motion";

const ageGroupsData: {
  key: string;
  label: string;
  title: string;
  description: string;
  toys: { name: string; desc: string }[];
}[] = [
  {
    key: "0-3",
    label: "0–3 luni",
    title: "Observare & urmărire vizuală",
    description:
      "În această etapă, jocul înseamnă privire, contrast și descoperirea treptată a mediului. Jucăriile susțin dezvoltarea atenției vizuale și primele conexiuni senzoriale.",
    toys: [
      { name: "Carusel muzical", desc: "Stimulare vizuală și auditivă" },
      { name: "Covoraș de activități", desc: "Explorare senzorială" },
      { name: "Jucării cu contrast", desc: "Cartonașe alb-negru pentru dezvoltare vizuală" },
      { name: "Zornăitoare texturată", desc: "Apucare și stimulare tactilă" },
      { name: "Oglindă moale", desc: "Recunoașterea propriei imagini" },
    ],
  },
  {
    key: "3-12",
    label: "3–12 luni",
    title: "Explorare senzorială activă",
    description:
      "Copilul începe să apuce, să scuture, să rotească și să experimenteze activ cu materialele. Jocul devine mișcare, sunet și descoperire prin atingere.",
    toys: [
      { name: "Cuburi moi", desc: "Apucare, aruncare, stivuire" },
      { name: "Jucărie cauză-efect", desc: "Butoane, lumini, sunete" },
      { name: "Cărți texturate", desc: "Explorare tactilă și vizuală" },
      { name: "Bile senzoriale", desc: "Texturi diferite pentru explorare" },
      { name: "Sortator forme simple", desc: "Introducere în potrivire" },
    ],
  },
  {
    key: "12-24",
    label: "12–24 luni",
    title: "Mișcare, potrivire & logică timpurie",
    description:
      "Aceasta este etapa în care copilul caută relații între obiecte, experimentează potrivirea și începe să înțeleagă legătura cauză–efect. Jocul susține coordonarea, organizarea și primele structuri logice.",
    toys: [
      { name: "Puzzle lemn", desc: "Potrivire forme și animale" },
      { name: "Stivuitor inele", desc: "Ordonare și motricitate fină" },
      { name: "Joc de înșirat", desc: "Coordonare ochi-mână" },
      { name: "Instrumente muzicale", desc: "Tamburină, xilofon, maracas" },
      { name: "Jucărie de sortare", desc: "Forme, culori, dimensiuni" },
    ],
  },
  {
    key: "24-36",
    label: "24–36 luni",
    title: "Problem solving, joc simbolic & autonomie",
    description:
      "Copilul începe să creeze scenarii, să imite lumea adulților și să rezolve sarcini mai complexe. Jocul devine structură, poveste și exercițiu al independenței.",
    toys: [
      { name: "Set construcție lemn", desc: "Construire și joc imaginativ" },
      { name: "Puzzle 12+ piese", desc: "Concentrare și logică" },
      { name: "Set joc de rol", desc: "Bucătărie, doctor, atelier" },
      { name: "Plastilină & unelte", desc: "Creativitate și motricitate fină" },
      { name: "Joc de echilibru", desc: "Coordonare și răbdare" },
    ],
  },
];

const Examples = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">
          Exemple de jucării
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Exemplele de mai jos sunt extrase din catalogul JucaBox Baby și au rol orientativ.
        </p>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
          Ele ilustrează tipurile de jucării utilizate în selecțiile noastre pentru diferite grupe de
          vârstă.
        </p>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto mt-4 italic">
          Selecțiile finale sunt adaptate copilului și pot varia în funcție de etapă, interese și
          disponibilitate.
        </p>
      </motion.div>

      <div className="space-y-14 max-w-4xl mx-auto">
        {ageGroupsData.map((group, groupIndex) => (
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.06 }}
          >
            <p className="text-sm font-heading font-bold text-primary mb-1">{group.label}</p>
            <h2 className="text-xl font-heading font-bold text-foreground mb-2">{group.title}</h2>
            <p className="text-muted-foreground text-sm md:text-base mb-4">{group.description}</p>
            <div
              className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-thin"
              style={{ scrollbarWidth: "thin" }}
            >
              {group.toys.map((toy, i) => (
                <div
                  key={`${group.key}-${i}`}
                  className="flex-shrink-0 w-[220px] md:w-[240px] bg-card rounded-xl p-4 border"
                >
                  <h3 className="font-heading font-bold text-foreground mb-1">{toy.name}</h3>
                  <p className="text-muted-foreground text-sm">{toy.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Examples;
