import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { X, ShieldCheck, Zap, Thermometer } from "lucide-react";
import portableImg from "@/assets/portable-charger.png";
import onboardImg from "@/assets/onboard-charger.png";

interface ProductsViewProps {
  initialCategory: string;
}

const voltages = ["48 V", "60 V", "72 V", "84 V", "96 V", "240 V", "400 V"];
const categories = [
  { id: "all", label: "All" },
  { id: "portable", label: "Portable Chargers" },
  { id: "onboard", label: "On-Board Chargers" },
];
const powers = ["2.2 kW", "3.3 kW", "6.6 kW"];

interface Product {
  id: string;
  category: "portable" | "onboard";
  categoryLabel: string;
  voltage: string;
  power: string;
  image: string;
}

function generateProducts(): Product[] {
  const products: Product[] = [];
  const cats: Array<{ id: "portable" | "onboard"; label: string }> = [
    { id: "portable", label: "Portable Charger" },
    { id: "onboard", label: "On-Board Charger" },
  ];
  for (const cat of cats) {
    for (const v of voltages) {
      products.push({
        id: `${cat.id}-${v}-3.3kW`,
        category: cat.id,
        categoryLabel: cat.label,
        voltage: v,
        power: "3.3 kW",
        image: cat.id === "portable" ? portableImg : onboardImg,
      });
    }
  }
  return products;
}

const allProducts = generateProducts();

const ProductsView = ({ initialCategory }: ProductsViewProps) => {
  const [category, setCategory] = useState(initialCategory);
  const [voltage, setVoltage] = useState("all");
  const [power, setPower] = useState("all");
  const [modal, setModal] = useState<Product | null>(null);

  const filtered = allProducts.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (voltage !== "all" && p.voltage !== voltage) return false;
    if (power !== "all" && p.power !== power) return false;
    return true;
  });

  return (
    <section className="min-h-screen pt-20 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Catalog</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Products</h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="glass-card p-6 rounded-2xl sticky top-24 space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCategory(c.id)}
                      className="flex items-center gap-3 w-full text-left text-sm py-1"
                    >
                      <span className={`filter-radio ${category === c.id ? "selected" : ""}`} />
                      <span className={category === c.id ? "font-medium text-foreground" : "text-muted-foreground"}>
                        {c.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voltage */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Voltage</h4>
                <div className="space-y-2">
                  <button onClick={() => setVoltage("all")} className="flex items-center gap-3 w-full text-left text-sm py-1">
                    <span className={`filter-radio ${voltage === "all" ? "selected" : ""}`} />
                    <span className={voltage === "all" ? "font-medium text-foreground" : "text-muted-foreground"}>All</span>
                  </button>
                  {voltages.map((v) => (
                    <button key={v} onClick={() => setVoltage(v)} className="flex items-center gap-3 w-full text-left text-sm py-1">
                      <span className={`filter-radio ${voltage === v ? "selected" : ""}`} />
                      <span className={voltage === v ? "font-medium text-foreground" : "text-muted-foreground"}>{v}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Power */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Power</h4>
                <div className="space-y-2">
                  <button onClick={() => setPower("all")} className="flex items-center gap-3 w-full text-left text-sm py-1">
                    <span className={`filter-radio ${power === "all" ? "selected" : ""}`} />
                    <span className={power === "all" ? "font-medium text-foreground" : "text-muted-foreground"}>All</span>
                  </button>
                  {powers.map((p) => (
                    <button key={p} onClick={() => setPower(p)} className="flex items-center gap-3 w-full text-left text-sm py-1">
                      <span className={`filter-radio ${power === p ? "selected" : ""}`} />
                      <span className={power === p ? "font-medium text-foreground" : "text-muted-foreground"}>{p}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">No products match the selected filters.</div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="glass-card hover-lift rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setModal(product)}>
                    <div className="h-40 bg-muted flex items-center justify-center p-4">
                      <img src={product.image} alt={product.categoryLabel} className="h-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">{product.categoryLabel}</span>
                        <span className="text-xs text-muted-foreground">{product.voltage}</span>
                      </div>
                      <h3 className="font-display font-semibold text-foreground">{product.categoryLabel} – {product.voltage}</h3>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <span>⚡ {product.power}</span>
                        <span>📊 ≥97% Eff.</span>
                        <span>🔌 180–275 VAC</span>
                        <span>⚙️ PF 0.98</span>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="protection-badge">OVP</span>
                        <span className="protection-badge">OCP</span>
                        <span className="protection-badge">OTP</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-2 rounded-xl">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4" onClick={() => setModal(null)}>
          <div className="bg-card rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"><X className="w-5 h-5" /></button>
            <div className="flex items-center gap-4 mb-6">
              <img src={modal.image} alt={modal.categoryLabel} className="w-24 h-24 object-contain bg-muted rounded-xl p-2" />
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">{modal.categoryLabel}</h3>
                <p className="text-sm text-muted-foreground">{modal.voltage} • {modal.power}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                <Zap className="w-5 h-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">Efficiency</p><p className="text-sm font-semibold text-foreground">≥ 97%</p></div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">Protection</p><p className="text-sm font-semibold text-foreground">OVP, OCP, OTP • IP67</p></div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                <Thermometer className="w-5 h-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">Operating Temperature</p><p className="text-sm font-semibold text-foreground">–40°C to +55°C</p></div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Input Voltage</p><p className="font-semibold text-foreground">180–275 VAC</p></div>
              <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Input Current</p><p className="font-semibold text-foreground">30 A Max</p></div>
              <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Power Factor</p><p className="font-semibold text-foreground">0.98</p></div>
              <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Dimensions</p><p className="font-semibold text-foreground">280×160×140 mm</p></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsView;
