import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Acasă" },
  { to: "/pachete", label: "Pachete & Abonamente" },
  { to: "/selectie", label: "Selecție personalizată" },
  { to: "/exemple", label: "Exemple jucării" },
  { to: "/igienizare", label: "Igienizare" },
  { to: "/recenzii", label: "Recenzii" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="JucaBox Baby" className="h-12 w-12 rounded-full" />
          <span className="font-heading font-extrabold text-xl text-foreground">JucaBox Baby</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-body font-semibold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-colors ${location.pathname === link.to ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/pachete"
            className="hidden md:inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Abonează-te
          </Link>
          <button className="lg:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-card border-t px-4 py-4 flex flex-col gap-3 font-body font-semibold text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`py-2 ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/pachete" onClick={() => setMenuOpen(false)} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-bold text-sm text-center mt-2">
            Abonează-te
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="py-16 border-t bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="JucaBox Baby" className="h-10 w-10 rounded-full" />
            <span className="font-heading font-extrabold text-lg text-foreground">JucaBox Baby</span>
          </div>
          <p className="text-muted-foreground text-sm">Jucării educative, cu rotație lunară, adaptate vârstei copilului tău.</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4 text-foreground">Contact</h4>
          <p className="text-muted-foreground text-sm mb-2">📞 +373 786 755 75</p>
          <p className="text-muted-foreground text-sm mb-2">📍 Mun. Chișinău, str. Albișoara 80/11, ap.10</p>
          <p className="text-muted-foreground text-sm">Administrator: Rotaru-Cojocari Diana</p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4 text-foreground">Navigare</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t">
        <p className="text-muted-foreground text-xs">© 2025 TOYSBABY SRL | IDNO 1025600036878 | Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
