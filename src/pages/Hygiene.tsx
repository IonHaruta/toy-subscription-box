import { motion } from "framer-motion";

const Hygiene = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-heading font-black mb-6 text-foreground">
            Igienizare și siguranță
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Fiecare jucărie este verificată, curată și igienizată între utilizări, prin metode adecvate vârstei copiilor și materialelor din care sunt realizate.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <em>Siguranța și starea jucăriilor sunt o prioritate în fiecare rotație.</em>
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hygiene;
