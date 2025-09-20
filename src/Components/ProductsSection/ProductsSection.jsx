import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../Context/CartContext"; // Import the cart hook
import "./ProductsSection.scss";

const products = [
  {
    id: 1,
    name: "Naturale Everyday Makhana",
    image: "/naturale-everyday.jpg",
    price: 249,
    oldPrice: 299,
  },
  {
    id: 2,
    name: "Naturale Pop Makhana",
    image: "/naturale-pop.jpg",
    price: 199,
    oldPrice: 249,
  },
  {
    id: 3,
    name: "Naturale Global Makhana",
    image: "/naturale-global.jpg",
    price: 299,
    oldPrice: 349,
  },
];

const ProductsSection = () => {
  const { addToCart } = useCart(); // Get the add function from the context
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <section className="px-4 md:px-10 py-12 bg-[#fdfaf8]">
      <h2 className="text-2xl md:text-3xl font-bold text-brandGreenDark mb-8 text-center">
        Our Products
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Mobile: horizontal scroll with snap */}
        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:hidden px-2 scrollbar-hide"
          onScroll={handleScroll}
        >
          {products.map((product, i) => {
            const discount =
              product.oldPrice && product.price
                ? Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                      100
                  )
                : null;

            return (
              <div
                key={product.id}
                className="min-w-[100%] snap-center bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden group"
              >
                <div className="relative">
                  {discount && (
                    <span className="absolute top-2 left-2 z-10 bg-brandYellow text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-md">
                      {discount}% OFF
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-lg font-bold text-brandGreenDark">
                      ₹{product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm line-through text-gray-400">
                        ₹{product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    className="mt-3 flex items-center justify-center gap-1 bg-black text-white py-2 px-4 rounded-full hover:bg-brandGreenDark transition text-sm font-medium"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots for mobile */}
        <div className="flex sm:hidden justify-center mt-4 space-x-2">
          {products.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                activeIndex === i ? "bg-brandGreenDark" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const discount =
              product.oldPrice && product.price
                ? Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                      100
                  )
                : null;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden group"
              >
                <div className="relative">
                  {discount && (
                    <span className="absolute top-2 left-2 z-10 bg-brandYellow text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                      {discount}% OFF
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[280px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-xl font-bold text-brandGreenDark">
                      ₹{product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm line-through text-gray-400">
                        ₹{product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    className="mt-4 flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-full hover:bg-brandGreenDark transition text-sm font-medium"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
