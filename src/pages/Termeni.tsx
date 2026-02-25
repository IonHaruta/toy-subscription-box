import { motion } from "framer-motion";

const Termeni = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-8 text-foreground text-center">
            Termeni și responsabilități
          </h1>
          <ul className="text-lg text-muted-foreground leading-relaxed space-y-4 list-disc list-inside">
            <li>Jucăriile sunt oferite în baza unui contract de utilizare.</li>
            <li>Părinții se angajează să le folosească cu grijă și să le returneze în aceeași stare, uzura normală fiind acceptabilă.</li>
            <li>În cazul deteriorării sau pierderii, situația este analizată individual, conform termenilor contractuali.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Termeni;
