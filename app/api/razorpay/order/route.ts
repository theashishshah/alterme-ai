import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
    try {
        const { amount } = await req.json();

        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);
        return NextResponse.json({
            order,
        });
    } catch (error) {
        console.log(`Error in razorpay order ${error}`);
        return NextResponse.json(
            {
                error: "Faild to create order",
            },
            {
                status: 500,
            }
        );
    }
}
