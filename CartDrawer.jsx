import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import CheckoutForm from "./CheckoutForm";

export default function CartDrawer({ open, onClose, cart, setCart }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const clearCart = () => setCart([]);

  return (
    <Dialog open={open} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-end min-h-screen text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="w-full max-w-md bg-white p-6 rounded-t-2xl shadow-lg z-50">
          <Dialog.Title className="text-xl font-semibold mb-4">Your Cart</Dialog.Title>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-semibold">₦{item.price.toLocaleString()}</span>
                </div>
              ))}

              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>₦{total.toLocaleString()}</span>
              </div>

              <Button onClick={() => setShowCheckout(true)} className="w-full bg-[#1d3557] text-white">
                Proceed to Checkout
              </Button>

              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          )}

          <Button onClick={onClose} variant="ghost" className="mt-6 w-full text-sm">
            Close
          </Button>
        </div>
      </div>

      {showCheckout && (
        <CheckoutForm
          cart={cart}
          total={total}
          onCloseCheckout={() => setShowCheckout(false)}
          onOrderComplete={() => {
            clearCart();
            setShowCheckout(false);
            onClose();
          }}
        />
      )}
    </Dialog>
  );
      // Optionally update addToCart to prevent duplicates
const addToCart = (item) => {
  setCart((prev) => {
    const exists = prev.find((p) => p.name === item.name);
    if (exists) return prev; // skip if already in cart
    return [...prev, item];
  });
};
