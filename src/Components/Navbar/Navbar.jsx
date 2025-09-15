import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import OfferBanner from "../OfferBanner/OfferBanner";

const Navbar = ({ setNavbarHeight }) => {
  const [search, setSearch] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navbarRef = useRef(null);

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

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-8 max-w-lg">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandTeal bg-transparent"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-5 text-sm">
          <Link
            to="/"
            className="flex items-center text-brandGreenDark hover:text-brandTeal transition"
          >
            <User className="mr-1 h-4 w-4" /> Login
          </Link>
          <Link
            to="/"
            className="relative text-brandGreenDark hover:text-brandTeal transition"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-2 bg-brandYellow text-white text-[10px] px-1 rounded-full">
              0
            </span>
          </Link>

          {/* Mobile Search Icon */}
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

      {/* Mobile Search Input with smooth slide */}
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

      {/* Bottom Nav Links */}
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
                className="relative group transition-colors duration-200 text-brandGreenDark hover:text-brandGreenDark"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-brandGreenDark transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
