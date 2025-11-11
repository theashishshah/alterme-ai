"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PayPopupProps {
    onClose: () => void;
}

export default function PayPopup({ onClose }: PayPopupProps) {
    const router = useRouter();

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="max-w-sm rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        Unlock unlimited conversations
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        You’ve reached your free chat limit. Continue chatting by upgrading your
                        plan. (ChatGPT API is costing us.)
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-3 mt-6">
                    <Button
                        className="w-full"
                        onClick={() => {
                            onClose();
                            router.push("/payment-checkout");
                        }}
                    >
                        Upgrade Now
                    </Button>
                    <Button variant="outline" className="w-full" onClick={onClose}>
                        Maybe Later
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
