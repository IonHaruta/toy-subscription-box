import { motion } from "framer-motion";

const reviews = [
  { name: "Ana M.", text: "Copilul meu abia așteaptă cutia în fiecare lună! Jucăriile sunt mereu potrivite vârstei lui.", stars: 5 },
  { name: "Elena R.", text: "Un serviciu excelent — scăpăm de jucăriile neutilizate și copilul are mereu ceva nou de descoperit.", stars: 5 },
  { name: "Maria P.", text: "Apreciez foarte mult igienizarea și recomandările primite odată cu jucăriile.", stars: 5 },
];

const Reviews = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Ce spun părinții</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experiențele părinților care au testat JucaBox Baby reflectă modul în care serviciul se integrează în viața de zi cu zi a familiilor.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border">
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

export default Reviews;
