import Navbar from "../components/ruma/Navbar";
import Hero from "../components/ruma/Hero";
import Services from "../components/ruma/Services";
import Inventory from "../components/ruma/Inventory";
import Portfolio from "../components/ruma/Portfolio.jsx";
import Footer from "../components/ruma/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Inventory />
      <Portfolio />
      <Footer />
    </div>
  );
}
