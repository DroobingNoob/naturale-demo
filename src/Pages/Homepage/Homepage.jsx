import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
import WhyChooseUsSection from "../../Components/WhyChooseUsSection/WhyChooseUs";

const Homepage = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <main style={{ paddingTop: `${navbarHeight}px` }}>
        <Banner />
        <ProductsSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
