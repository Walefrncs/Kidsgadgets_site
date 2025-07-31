import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PAYSTACK_PUBLIC_KEY = "pk_test_xxxxxxx"; // Replace with your actual key

export default function CheckoutForm({ cart, total, onCloseCheckout, onOrderComplete }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handlePay = () => {
    if (!name || !phone || !address) {
      alert("Please fill in all fields.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: `${phone}@paystack.com`,
      amount: total * 100,
      currency: "NGN",
      metadata: {
        custom_fields: [
          { display_name: "Name", variable_name: "name", value: name },
          { display_name: "Phone", variable_name: "phone", value: phone },
          { display_name: "Address", variable_name: "address", value: address },
        ],
      },
      callback: function (response) {
        const orderSummary = cart
          .map((item) => `• ${item.name} - ₦${item.price.toLocaleString()}`)
          .join("\n");

        const whatsappMsg = encodeURIComponent(
          `New Order from ${name}\nPhone: ${phone}\nAddress: ${address}\n\nItems:\n${orderSummary}\n\nTotal: ₦${total.toLocaleString()}\nTransaction Ref: ${response.reference}`
        );

        window.open(`https://wa.me/09010767395?text=${whatsappMsg}`, "_blank");
        onOrderComplete();
      },
      onClose: function () {
        alert("Transaction was not completed.");
      },
    });

    handler.openIframe();
  };

  return (
    <Dialog open={true} onClose={onCloseCheckout} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg z-50">
          <Dialog.Title className="text-xl font-semibold mb-4">Checkout</Dialog.Title>

          <div className="space-y-4 text-left">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Textarea placeholder="Delivery Address" value={address} onChange={(e) => setAddress(e.target.value)} />

            <Button onClick={handlePay} className="w-full bg-[#1d3557] text-white hover:bg-[#457b9d]">
              Pay ₦{total.toLocaleString()} with Paystack
            </Button>

            <Button variant="ghost" className="w-full text-sm" onClick={onCloseCheckout}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
