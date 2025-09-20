import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
import WhyChooseUsSection from "../../Components/WhyChooseUsSection/WhyChooseUs";
import { CartProvider } from "../../Context/CartContext"; // Import the provider
import MakhanaAwareness from "../../Components/MakhanaAwareness/MakhanaAwareness";

const Homepage = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <CartProvider>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <main style={{ paddingTop: `${navbarHeight}px` }}>
        <Banner />
        <MakhanaAwareness />
        <ProductsSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <Footer />
      </main>
    </CartProvider>
  );
};

export default Homepage;
