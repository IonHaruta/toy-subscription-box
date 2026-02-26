import { motion } from "framer-motion";
import ageGroupsData from "@/data/photos.json";

/** Pe GitHub Pages site-ul e la /toy-subscription-box/, deci pozele trebuie sub același path */
const PHOTOS_BASE = `${import.meta.env.BASE_URL}photos`.replace(/\/+/g, "/");

/** Encodare pentru URL (folder-ul conține spații) */
function toUrlPath(s: string): string {
  return encodeURIComponent(s);
}

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

      <div className="space-y-10 max-w-5xl mx-auto">
        {(ageGroupsData as { folder: string; label: string; items: { file: string; name: string }[] }[]).map(
          (group, groupIndex) => (
            <motion.div
              key={group.folder}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.05 }}
            >
              <h2 className="text-lg font-heading font-bold text-foreground mb-4">{group.label}</h2>
              <div
                className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-thin"
                style={{ scrollbarWidth: "thin" }}
              >
                {group.items.map((item) => {
                  const src = `${PHOTOS_BASE}/${toUrlPath(group.folder)}/${encodeURIComponent(item.file)}`;
                  return (
                    <div
                      key={item.file}
                      className="flex-shrink-0 w-[216px] md:w-[240px] bg-card rounded-xl border overflow-hidden"
                    >
                      <div className="aspect-square bg-muted">
                        <img
                          src={src}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="font-heading font-bold text-foreground text-sm p-3 text-center">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  </section>
);

export default Examples;
