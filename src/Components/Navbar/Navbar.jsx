import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import OfferBanner from "../OfferBanner/OfferBanner";
import { useCart } from "../../Context/CartContext"; // Import the cart hook

const Navbar = ({ setNavbarHeight }) => {
  const [search, setSearch] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navbarRef = useRef(null);

  const { totalItems } = useCart(); // Get the total cart items

  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
    });
    if (navbarRef.current) resizeObserver.observe(navbarRef.current);
    return () => resizeObserver.disconnect();
  }, [setNavbarHeight, showBanner]);

  return (
    <header
      ref={navbarRef}
      className="w-full fixed top-0 left-0 z-50 bg-[#f8efea] shadow-sm transition-all duration-300"
    >
      {/* Offer Banner */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          showBanner ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <OfferBanner />
      </div>

      {/* Top Row */}
      <div className="flex items-center justify-between px-4 md:px-10 py-3 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Naturale Makhana"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex flex-1 mx-8 max-w-lg">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandTeal bg-transparent"
          />
        </div>

        <div className="flex items-center space-x-5 text-sm">
          <Link
            to="/"
            className="flex items-center text-brandGreenDark hover:text-brandTeal transition inline-block transition-transform duration-200 ease-in-out hover:scale-110"
          >
            <User className="mr-1 h-4 w-4" /> Login
          </Link>
          <Link
            to="/cart"
            className="relative text-brandGreenDark hover:text-brandTeal transition inline-block transition-transform duration-200 ease-in-out hover:scale-110"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems >= 0 && (
              <span className="absolute -top-1 -right-2 bg-brandYellow text-white text-[10px] px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden text-brandGreenDark hover:text-brandTeal transition bg-transparent p-0 border-0"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            {mobileSearchOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-300 ${
          mobileSearchOpen
            ? "max-h-40 opacity-100 px-4 py-3"
            : "max-h-0 opacity-0 px-4 py-0"
        }`}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandTeal bg-transparent"
        />
      </div>

      <nav className="bg-transparent px-4 md:px-10">
        <ul className="flex items-center space-x-6 py-2 text-sm font-medium text-brandGreenDark">
          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/" },
            { label: "Products", to: "/" },
            { label: "Contact", to: "/" },
          ].map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="inline-block transition-transform duration-200 ease-in-out hover:scale-110 hover:text-brandTeal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
