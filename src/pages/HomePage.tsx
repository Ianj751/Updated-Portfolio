import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";

const HomePage: React.FC = () => {
  return (
    <>
      <PageTransition>
        <Hero />
      </PageTransition>
    </>
  );
};
export default HomePage;
