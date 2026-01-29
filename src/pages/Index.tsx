import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Solutions } from "@/components/home/Solutions";
import { OrderCTA } from "@/components/home/OrderCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustIndicators />
      <ProductShowcase />
      <Solutions />
      <OrderCTA />
    </Layout>
  );
};

export default Index;
