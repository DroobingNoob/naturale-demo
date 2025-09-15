import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
// import AboutPage from "./Pages/AboutPage";
// import ProductPage from "./Pages/ProductPage";
// import ContactPage from "./Pages/ContactPage";

const MyContext = createContext();

function App() {
  const [value, setValue] = useState("test");

  return (
    <MyContext.Provider value={value}>
      {/* ✅ Wrap everything inside Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
