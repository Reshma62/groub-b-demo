import Client from "../Components/Home/ClientSection/Client";
import CommonSection from "../Components/Home/CommonSection/CommonSection";
import Hero from "../Components/Home/Hero/Hero";
import Integient from "../Components/Home/Inteligent/Integient";
import TabSections from "../Components/Home/TabSections/TabSections";
import Clients from "@/Components/Home/Testimonials/Clients";

const Home = () => {
  return (
    <>
      <Hero />
      <Client />
      <TabSections />
      <Integient />
      <CommonSection isright={false} />
      <CommonSection isright={true} />
      <Clients />
      <CommonSection isright={false} />
      <CommonSection isright={true} />
    </>
  );
};

export default Home;
