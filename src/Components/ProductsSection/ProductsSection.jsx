import { ShoppingCart } from "lucide-react";

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
  return (
    <section className="px-4 md:px-10 py-12 bg-[#fdfaf8]">
      <h2 className="text-2xl md:text-3xl font-bold text-brandGreen mb-8 text-center">
        Our Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => {
          const discount =
            product.oldPrice && product.price
              ? Math.round(
                  ((product.oldPrice - product.price) / product.oldPrice) * 100
                )
              : null;

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden group"
            >
              <div className="relative">
                {/* Discount Badge */}
                {discount && (
                  <span className="absolute top-3 left-3 z-10 bg-brandYellow text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md pointer-events-none">
                    {discount}% OFF
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] sm:h-[280px] md:h-[320px] object-cover object-center group-hover:scale-105 transition-transform duration-300"
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
                <button className="mt-4 flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-full hover:bg-brandGreenDark transition text-sm font-medium">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
