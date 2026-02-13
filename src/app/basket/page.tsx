"use client";
import { Button } from "@/components/ui/button";
import { useBasketStore } from "@/store/basket-store";
import { WalletIcon } from "lucide-react";
import Image from "next/image";

export default function Basket() {

    const items = useBasketStore((state) => state.items);
    const total = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.product.priceRange.minVariantPrice.amount), 0);
    const checkOutBoxFontClass = "text-muted-foreground text-sm sm:text-base";
    const buttonClass = "w-fit cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide";
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <main>
            <section className="grid p-6 min-h-[60vh] place-content-center">
                <div className="flex flex-col items-center justify-center gap-8 text-center max-w-md mx-auto">
                    <div className="flex flex-col gap-4">
                        {items.map((item) => (
                            <div key={item.product.id} className="flex flex-row gap-4">
                                <Image 
                                    src={item.product.featuredImage.url}
                                    alt={item.product.featuredImage.altText ?? ""}
                                    width={150}
                                    height={150}
                                />
                                <div className="flex flex-col gap-2 items-start justify-center">
                                    <p>{item.product.title}</p>
                                    <p>£{item.product.priceRange.minVariantPrice.amount}</p>
                                    <p>{item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            {totalItems} items
                        </p>
                        <p className={checkOutBoxFontClass}>
                            Total: £{total}
                        </p>
                        <Button className={buttonClass}>
                            <WalletIcon className="w-4 h-4" />
                            Checkout
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}