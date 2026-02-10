import { motion } from "framer-motion";

const Hygiene = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-5xl mb-6 block">🧼</span>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-6 text-foreground">
            Igienizare și siguranță
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fiecare jucărie este verificată, curățată și igienizată între utilizări, folosind metode adecvate vârstei copiilor și materialelor din care sunt realizate.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Siguranța și starea jucăriilor sunt o prioritate în fiecare rotație.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Verificare", desc: "Fiecare jucărie este inspectată pentru defecte sau piese lipsă" },
              { icon: "✨", title: "Curățare", desc: "Curățare adaptată materialului — lemn, plastic, textil" },
              { icon: "🛡️", title: "Siguranță", desc: "Doar jucării conforme standardelor de siguranță pentru copii" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card rounded-2xl p-6 border"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hygiene;
