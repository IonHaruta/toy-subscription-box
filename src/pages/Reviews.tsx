import { motion } from "framer-motion";

const reviews = [
  {
    name: "Diana N.",
    text: "Este absolut o idee formidabilă. Se joacă cu toate jucăriile primite, este foarte entuziasmată și nu se satură de ele. Cu siguranță vom continua abonamentul, pentru că este practic și Elizabeth are un interes real pentru aceste jucării. Vă mulțumim!",
    stars: 5,
  },
  {
    name: "Felicia U.",
    text: "De fiecare dată când primim cutia suntem recunoscători pentru atenția la detalii. De la livrare și comunicare până la varietatea jucăriilor, totul este realizat cu multă grijă. Evoluăm prin jocurile pe care le primim și apreciem în mod special micile surprize adăugate. Un serviciu de calitate, cu adevărat util.",
    stars: 5,
  },
  {
    name: "Anastasia D.",
    text: "Ne-am bucurat din plin de jucăriile primite. Ne-a plăcut ideea să-i oferim copilului nostru jucării diferite în fiecare lună. Îmi place că alegeți cu grijă jucăriile în dependență de necesitatea copilului – ce i-ar fi de folos și interesant. Așa un approach personal vorbește despre multe.",
    stars: 5,
  },
  {
    name: "Marina P.",
    text: "Vă mulțumim pentru serviciile oferite! Am rămas foarte mulțumiți și am povestit prietenilor noștri despre JucaBox Baby.",
    stars: 5,
  },
];

const Reviews = () => (
  <section id="recenzii" className="py-12">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Ce spun părinții</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experiențele părinților care au ales JucaBox Baby arată cum serviciul se integrează firesc în viața de zi cu zi a familiilor.
        </p>
      </motion.div>
      <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-6 min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:max-w-5xl md:mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-[280px] md:w-auto bg-card rounded-2xl p-6 border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <span key={j} className="text-warm-yellow">★</span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">&quot;{review.text}&quot;</p>
              <p className="font-heading font-bold text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Reviews;
