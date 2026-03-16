import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsView from "@/components/ProductsView";
import TechSpecStrip from "@/components/TechSpecStrip";

const Products = () => {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [category]);

  return (
    <>
      <ProductsView initialCategory={category || "all"} />
      <TechSpecStrip />
    </>
  );
};

export default Products;
