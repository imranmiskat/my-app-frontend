import AllProductsSection from "@/components/AllProductsSection";
import FareDecreaseSection from "@/components/FareDecreaseSection";
import FareIncreaseSection from "@/components/FareIncreaseSection";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <div>
      <Hero />
      <FareIncreaseSection />
      <FareDecreaseSection />
      <AllProductsSection />
    </div>
  );
}

