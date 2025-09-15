import { X } from "lucide-react";
import { useState } from "react";

const OfferBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-brandGreenDark text-white text-sm md:text-base py-2 px-4 flex items-center justify-center z-60 relative">
      <span className="text-center font-medium">
        🎉 Special Offer: Get <span className="font-semibold">15% OFF</span> on
        your first order! Use code <span className="underline">WELCOME15</span>
      </span>
      {/* <button
        onClick={() => setVisible(false)}
        aria-label="Close banner"
        className="absolute right-3 text-white hover:text-gray-100 transition"
      >
        <X size={18} />
      </button> */}
    </div>
  );
};

export default OfferBanner;
