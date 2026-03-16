import { useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // Redirect to Home — this file kept for compatibility
    window.location.replace("/");
  }, []);

  return null;
};

export default Index;
