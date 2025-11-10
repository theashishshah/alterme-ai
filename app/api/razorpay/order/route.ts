import { NextResponse, NextRequest } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
    try {
        const { amount } = await req.json();

        const razorpayClient = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const paymentOptions = {
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                purpose: "Just for fun I guess, BTW thank you!",
            },
        };

        const order = await razorpayClient.orders.create(paymentOptions);

        return NextResponse.json(
            {
                order,
            },
            { status: 200 }
        );
    } catch (error) {
        console.log(`Something went wrong in order API, check it out.`);
        return NextResponse.json(
            {
                error: "Failed to create order",
            },
            { status: 500 }
        );
    }
}
