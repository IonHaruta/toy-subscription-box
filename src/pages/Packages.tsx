import { motion } from "framer-motion";

const pricingData = [
  { period: "1 lună", discount: null, standard: "500", premium: "750" },
  { period: "3 luni", discount: "-7%", standard: "465", premium: "697,5" },
  { period: "6 luni", discount: "-15%", standard: "425", premium: "637,5" },
  { period: "12 luni", discount: "-20%", standard: "400", premium: "600" },
];

const includedItems = [
  "O selecție atentă, adaptată vârstei și intereselor copilului",
  "Acces la jucării pentru o perioadă de o lună",
  "Igienizare completă între utilizări",
  "Livrare și retur incluse în serviciu",
  "Continuitate prin rotație lunară",
];

const Packages = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-foreground">Pachete & abonamente</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Abonamentele JucaBox Baby includ mai mult decât jucăriile în sine.
        </p>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Costul acoperă întregul serviciu, nu doar materialele de joacă.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto mb-16">
        <div className="bg-card rounded-2xl p-6 border">
          <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Fiecare pachet presupune:</h3>
          <ul className="space-y-3">
            {includedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-primary mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Standard */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-8 border-2 border-secondary">
          <div className="text-center mb-8">
            <span className="inline-block bg-secondary/30 text-secondary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-3">PACHET STANDARD</span>
            <h3 className="font-heading font-black text-2xl text-foreground">3 jucării / lună</h3>
          </div>
          <div className="space-y-4">
            {pricingData.map((row, i) => (
              <div key={i} className="flex items-center justify-between bg-muted rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-foreground">{row.period}</span>
                  {row.discount && <span className="bg-soft-green/30 text-foreground text-xs font-bold px-2 py-0.5 rounded-full">{row.discount}</span>}
                </div>
                <span className="font-heading font-black text-xl text-foreground">{row.standard} <span className="text-sm font-semibold text-muted-foreground">MDL{row.period !== "1 lună" ? "/lună" : ""}</span></span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/37378675575?text=Bună, aș dori pachetul Standard JucaBox Baby." target="_blank" rel="noopener noreferrer" className="mt-8 block text-center bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-heading font-bold hover:opacity-90 transition-opacity">
            Alege Standard
          </a>
        </motion.div>

        {/* Premium */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-8 border-2 border-primary relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="inline-block bg-primary/15 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-3">PACHET PREMIUM</span>
            <h3 className="font-heading font-black text-2xl text-foreground">5 jucării / lună</h3>
          </div>
          <div className="space-y-4">
            {pricingData.map((row, i) => (
              <div key={i} className="flex items-center justify-between bg-primary/5 rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-foreground">{row.period}</span>
                  {row.discount && <span className="bg-soft-green/30 text-foreground text-xs font-bold px-2 py-0.5 rounded-full">{row.discount}</span>}
                </div>
                <span className="font-heading font-black text-xl text-foreground">{row.premium} <span className="text-sm font-semibold text-muted-foreground">MDL{row.period !== "1 lună" ? "/lună" : ""}</span></span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/37378675575?text=Bună, aș dori pachetul Premium JucaBox Baby." target="_blank" rel="noopener noreferrer" className="mt-8 block text-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-bold hover:opacity-90 transition-opacity">
            Alege Premium
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Packages;
