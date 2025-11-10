"use client";

import { useState } from "react";

export default function CheckoutPage() {
    const [loading, setLoading] = useState(false);

    async function handlePayment() {
        setLoading(true);
        try {
            const res = await fetch("/api/razorpay/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: 1 }),
            });

            const { order } = await res.json();

            if (typeof window !== "undefined") {
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.async = true;
                document.body.appendChild(script);

                script.onload = () => {
                    const options = {
                        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                        amount: order.amount,
                        currency: "INR",
                        name: "Alterme-ai",
                        description: "AI Persona Subscription",
                        order_id: order.id,
                        handler: function (response: any) {
                            alert("Payment successful 🎉");
                            console.log(response);
                        },
                        prefill: {
                            name: "Ashish Shah",
                            email: "ashishah@outlook.com",
                        },
                        theme: { color: "#111827" },
                    };

                    const razor = new (window as any).Razorpay(options);
                    razor.open();
                };
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <button
                onClick={handlePayment}
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
                {loading ? "Processing..." : "Pay ₹1"}
            </button>
        </main>
    );
}
