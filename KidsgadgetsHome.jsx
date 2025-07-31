import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CartDrawer from "./CartDrawer";

const gadgets = [
  {
    name: "Kids Learning Tablet",
    description:
      "Pre-installed with educational apps and games for early learning.",
    price: 35000,
    image: "/images/learning-tablet.jpg",
  },
  {
    name: "STEM Building Blocks Kit",
    description:
      "Encourages creativity and teaches science and engineering basics.",
    price: 18500,
    image: "/images/stem-kit.jpg",
  },
  {
    name: "Interactive Alphabet Robot",
    description:
      "Teaches letters, words, and songs in a fun interactive way.",
    price: 22000,
    image: "/images/alphabet-robot.jpg",
  },
];

export default function KidsGadgetsHome() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-[#fefefe] py-10 px-4 md:px-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
          Authentic Kids Educational Gadgets
        </h1>
        <Button onClick={() => setShowCart(true)} className="bg-[#1d3557] text-white">
          View Cart ({cart.length})
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {gadgets.map((gadget, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <img
              src={gadget.image}
              alt={gadget.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-[#222] mb-2">
                {gadget.name}
              </h2>
              <p className="text-sm text-[#555] mb-3">{gadget.description}</p>
              <p className="font-bold text-[#e63946] mb-4">₦{gadget.price.toLocaleString()}</p>
              <Button
                onClick={() => addToCart(gadget)}
                className="w-full bg-[#1d3557] text-white hover:bg-[#457b9d]"
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <CartDrawer
        open={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        setCart={setCart}
      />
    </div>
  ); 
              
