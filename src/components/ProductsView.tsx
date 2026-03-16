import { useState, useEffect } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { X, ShieldCheck, Zap, Thermometer } from "lucide-react";
import portableImg from "@/assets/portable-charger.png";
import onboardImg from "@/assets/onboard-charger.png";
import dcdcImg from "@/assets/dcdc-converter.png";

interface ProductsViewProps {
  initialCategory: string;
}

const categories = [
  { id: "all", label: "All Products" },
  { id: "portable", label: "Portable Chargers" },
  { id: "onboard", label: "On-Board Chargers" },
  { id: "dcdc", label: "DC-DC Converters" },
];

interface Product {
  id: string;
  category: string;
  categoryLabel: string;
  voltage: string;
  nominalVoltage: string;
  power: string;
  current: string;
  inputVoltage: string;
  inputCurrent: string;
  efficiency: string;
  powerFactor?: string;
  features: string[];
  image: string;
}

function generateProducts(): Product[] {
  const products: Product[] = [];

  // 3.3kW OBC products (from spec sheet)
  const obcSpecs = [
    { voltage: "48 V", nominal: "48V", current: "60A" },
    { voltage: "60 V", nominal: "60V", current: "55A" },
    { voltage: "72 V", nominal: "72V", current: "45A" },
    { voltage: "84 V", nominal: "84V", current: "40A" },
    { voltage: "96 V", nominal: "96V", current: "35A" },
  ];
  for (const spec of obcSpecs) {
    products.push({
      id: `obc-3.3kw-${spec.nominal}`,
      category: "onboard",
      categoryLabel: "On-Board Charger (3.3kW)",
      voltage: spec.voltage,
      nominalVoltage: spec.nominal,
      power: "3.3 kW",
      current: spec.current,
      inputVoltage: "170–270 VAC",
      inputCurrent: "16A RMS",
      efficiency: "98%",
      powerFactor: "0.98",
      features: ["CAN Communication", "Custom Battery Charging", "OVP", "OCP", "Short Circuit Protection"],
      image: onboardImg,
    });
  }

  // 6.6kW OBC products
  const obc66Specs = [
    { voltage: "108 V", nominal: "108V", current: "60A" },
    { voltage: "144 V", nominal: "144V", current: "46A" },
    { voltage: "312 V", nominal: "312V", current: "20A" },
    { voltage: "520 V", nominal: "520V", current: "40A" },
  ];
  for (const spec of obc66Specs) {
    products.push({
      id: `obc-6.6kw-${spec.nominal}`,
      category: "onboard",
      categoryLabel: "On-Board Charger (6.6kW)",
      voltage: spec.voltage,
      nominalVoltage: spec.nominal,
      power: "6.6 kW",
      current: spec.current,
      inputVoltage: "170–270 VAC",
      inputCurrent: "32A RMS",
      efficiency: "98%",
      powerFactor: "0.98",
      features: ["CAN Communication", "Custom Battery Charging", "OVP", "OCP", "Short Circuit Protection"],
      image: onboardImg,
    });
  }

  // Portable chargers
  const portableVoltages = ["48 V", "60 V", "72 V", "84 V", "96 V", "240 V", "400 V"];
  for (const v of portableVoltages) {
    products.push({
      id: `portable-${v}`,
      category: "portable",
      categoryLabel: "Portable Charger",
      voltage: v,
      nominalVoltage: v,
      power: "3.3 kW",
      current: "60A",
      inputVoltage: "170–270 VAC",
      inputCurrent: "16A RMS",
      efficiency: "98%",
      powerFactor: "0.98",
      features: ["Compact Design", "OVP", "OCP", "OTP"],
      image: portableImg,
    });
  }

  // DC-DC Converters (from spec sheet)
  const dcdcSpecs = [
    { inputRange: "44–97 V", nominal: "72V", powers: ["1 kW", "1.2 kW", "1.5 kW"] },
    { inputRange: "74–162 V", nominal: "108V", powers: ["1 kW", "1.2 kW", "1.5 kW"] },
    { inputRange: "100–200 V", nominal: "144V", powers: ["1 kW", "1.2 kW", "1.5 kW"] },
    { inputRange: "220–450 V", nominal: "320V", powers: ["1 kW", "1.2 kW", "1.5 kW"] },
  ];
  for (const spec of dcdcSpecs) {
    for (const power of spec.powers) {
      products.push({
        id: `dcdc-${spec.nominal}-${power}`,
        category: "dcdc",
        categoryLabel: "DC-DC Converter",
        voltage: `${spec.nominal} → 14V`,
        nominalVoltage: spec.nominal,
        power: power,
        current: power === "1 kW" ? "80A" : power === "1.2 kW" ? "100A" : "125A",
        inputVoltage: spec.inputRange,
        inputCurrent: "—",
        efficiency: "98%",
        features: ["CAN Communication", "Natural/Forced Air Cooling", "OVP", "OCP"],
        image: dcdcImg,
      });
    }
  }

  return products;
}

const allProducts = generateProducts();

const ProductsView = ({ initialCategory }: ProductsViewProps) => {
  const [category, setCategory] = useState(initialCategory);
  const [modal, setModal] = useState<Product | null>(null);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const filtered = allProducts.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    return true;
  });

  return (
    <section className="min-h-screen pt-20 pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Catalog</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Products</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Comprehensive EV charging solutions designed for efficiency, reliability, and versatility.
          </p>
        </AnimatedSection>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                category === c.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">No products match the selected filters.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="glass-card hover-lift rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setModal(product)}>
                <div className="h-40 bg-muted/50 flex items-center justify-center p-4">
                  <img src={product.image} alt={product.categoryLabel} className="h-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 space-y-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">{product.categoryLabel}</span>
                  <h3 className="font-display font-semibold text-foreground text-sm">{product.voltage} • {product.power}</h3>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                    <span>⚡ {product.efficiency} Eff.</span>
                    <span>🔌 {product.current} max</span>
                    <span>📥 {product.inputVoltage}</span>
                    {product.powerFactor && <span>📊 PF {product.powerFactor}</span>}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 3).map((f, j) => (
                      <span key={j} className="protection-badge text-[10px]">{f}</span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2 rounded-xl text-xs">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4" onClick={() => setModal(null)}>
          <div className="bg-card rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in-up max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
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
                <div><p className="text-xs text-muted-foreground">Efficiency</p><p className="text-sm font-semibold text-foreground">{modal.efficiency}</p></div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">Protection & Features</p><p className="text-sm font-semibold text-foreground">{modal.features.join(", ")}</p></div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                <Thermometer className="w-5 h-5 text-primary" />
                <div><p className="text-xs text-muted-foreground">Operating Temperature</p><p className="text-sm font-semibold text-foreground">–40°C to +55°C</p></div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Input Voltage</p><p className="font-semibold text-foreground">{modal.inputVoltage}</p></div>
              <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Input Current</p><p className="font-semibold text-foreground">{modal.inputCurrent}</p></div>
              <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Output Current</p><p className="font-semibold text-foreground">{modal.current}</p></div>
              {modal.powerFactor && <div className="p-3 rounded-xl bg-muted"><p className="text-xs text-muted-foreground">Power Factor</p><p className="font-semibold text-foreground">{modal.powerFactor}</p></div>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsView;
