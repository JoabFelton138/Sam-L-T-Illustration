"use client";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBasketStore } from "@/store/basket-store";
import { WalletIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function Basket() {

    const items = useBasketStore((state) => state.items);
    const total = items.reduce((acc, item) => acc + item.quantity * parseFloat(item.product.priceRange.minVariantPrice.amount), 0);
    const checkOutBoxFontClass = "text-muted-foreground text-sm sm:text-base";
    const buttonClass = "w-fit cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide";
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const removeItem = useBasketStore((state) => state.removeItem);
    const updateQuantity = useBasketStore((state) => state.updateQuantity);

    return (
        <main>
            <section className="max-w-5xl mx-auto px-4">
                <Header title="Basket" />
                <div className="border-t border-dashed border-gray-300"/>
                    {items.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-12">
                            <p className="font-medium">Your basket is empty.</p>
                        </div>
                    )}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
                        <div className="divide-y">
                            {items.map((item) => (
                                <div key={item.product.id} className="flex flex-row gap-8 py-8 items-center justify-center lg:justify-start">
                                    <Image 
                                        src={item.product.featuredImage.url}
                                        alt={item.product.featuredImage.altText ?? ""}
                                        width={150}
                                        height={150}
                                        className="rounded"
                                    />
                                    <div className="flex flex-col gap-4 items-center justify-center">
                                        <p className="font-medium">{item.product.title}</p>
                                        <p className="text-muted-foreground">£{item.product.priceRange.minVariantPrice.amount}</p>
                                        <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
                                            <Input 
                                                value={item.quantity} 
                                                onChange={(e) => updateQuantity(item.product, parseInt(e.target.value))} 
                                                type="number"
                                                min={1}
                                                max={10}
                                                className="w-16"
                                                onKeyDown={(e) => {
                                                    if (e.key !== "Tab") {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            />
                                            <Button 
                                                className={buttonClass}
                                                size="sm"
                                                onClick={() => removeItem(item.product)}>
                                                <XIcon className="w-4 h-4" />
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="lg:hidden border-t border-dashed border-gray-300"/>
                        {items.length > 0 && (
                            <div className="border rounded-lg p-6 mt-6 h-fit">
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <p className="text-muted-foreground">
                                        {totalItems} items
                                    </p>
                                    <p className={checkOutBoxFontClass}>
                                        Total: £{total}
                                    </p>
                                    <Button className={buttonClass}>
                                        <WalletIcon className="w-full" />
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                <div className="hidden lg:block border-t border-dashed border-gray-300"/>
            </section>
        </main>
    );
}