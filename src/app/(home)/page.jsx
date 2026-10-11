import Hero from "@/components/Hero";
import PriceUpSection from "@/components/PriceUpSection";
import PriceDownSection from "@/components/PriceDownSection";
import AllProducts from "@/components/AllProducts";


export default async function Home() {
    
  return (
    <>
      <Hero />
      <PriceUpSection />
      <PriceDownSection />
      <AllProducts />
    </>
  );
}