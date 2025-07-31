import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const gadgets = [
  {
    name: "Kids Learning Tablet",
    description: "Pre-installed with educational apps and games for early learning.",
    price: "₦35,000",
    image: "/images/learning-tablet.jpg",
  },
  {
    name: "STEM Building Blocks Kit",
    description: "Encourages creativity and teaches science and engineering basics.",
    price: "₦18,500",
    image: "/images/stem-kit.jpg",
  },
  {
    name: "Interactive Alphabet Robot",
    description: "Teaches letters, words, and songs in a fun interactive way.",
    price: "₦22,000",
    image: "/images/alphabet-robot.jpg",
  },
];

export default function KidsGadgetsHome() {
  return (
    <div className="min-h-screen bg-[#fefefe] py-10 px-4 md:px-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#1a1a1a] mb-10">
        Authentic Kids Educational Gadgets in Nigeria
      </h1>

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
              <p className="font-bold text-[#e63946] mb-4">{gadget.price}</p>
              <Button className="w-full bg-[#1d3557] text-white hover:bg-[#457b9d]">
                Order Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4 text-center">
          Get in Touch
        </h3>
        <div className="max-w-xl mx-auto">
          <Input placeholder="Enter your name" className="mb-3" />
          <Input placeholder="Enter your WhatsApp number" className="mb-3" />
          <Button className="w-full bg-[#1d3557] text-white hover:bg-[#457b9d]">
            Contact Us on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
