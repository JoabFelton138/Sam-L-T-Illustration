"use client";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useBasketStore } from "@/store/basket-store";
import { useFadeIn } from "@/hooks/use-fade-in";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, use, useRef } from "react";
import { storeMockResponse } from "@/lib/storeMockResponse";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "sonner";

interface ProductPageProps {
    params: Promise<{ handle: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const { handle } = use(params);
    const products = storeMockResponse.data.products.edges.map((edge) => edge.node);
    const product = products.find((p) => p.handle === handle);

    const imageRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);
    useFadeIn([imageRef, detailsRef]);

    const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const addItem = useBasketStore((state) => state.addItem);
    const router = useRouter();
    const imageZoom = "transition-transform duration-300 ease-out group-hover:scale-[1.05] will-change-transform cursor-pointer";
    const buttonClass = "w-fit cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide";

    if (!product) return notFound();

    return (
        <main>
            <section className="px-5 pt-6 lg:pt-0 max-w-5xl mx-auto">
                <Link 
                    href="/shop" 
                    className="inline-flex items-center gap-2 text-brand hover:text-brand/80 mb-6 transition-colors"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to Shop</span>
                </Link>
                
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-6 md:gap-8 lg:gap-10">
                    <div ref={imageRef} className="group overflow-hidden rounded max-w-[350px] sm:max-w-[400px] md:max-w-[425px] lg:max-w-[475px] mx-auto md:mx-0">
                        <Image
                            src={product.featuredImage?.url ?? ""}
                            alt={product.featuredImage.altText ?? ""}
                            width={575}
                            height={575}
                            className={`w-full object-cover aspect-square ${imageZoom}`}
                        />
                    </div>
                    
                    <div ref={detailsRef} className="space-y-4 md:space-y-6 text-center md:text-left">
                        <Header title={product.title} className="items-center md:items-start pb-2"/>
                        <div className="space-y-2">
                            <p className="text-xl sm:text-2xl font-semibold">£{product.priceRange.minVariantPrice.amount}</p>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{product.description}</p>
                        
                        <div className="flex flex-row items-center justify-center md:justify-start gap-3">
                            <label
                                htmlFor="form-quantity"
                                className="text-sm font-medium shrink-0"
                            >
                                Quantity
                            </label>
                            <Select 
                                value={selectedQuantity.toString()}
                                onValueChange={(value) => setSelectedQuantity(parseInt(value))}
                            >
                                <SelectTrigger id="form-quantity" className="w-20">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {quantity.map((q) => (
                                        <SelectItem key={q} value={q.toString()}>
                                            {q}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                            <Button 
                                className={buttonClass}
                                onClick={() => 
                                    {
                                        addItem(product, selectedQuantity)
                                        toast.success(`${selectedQuantity} ${selectedQuantity > 1 ? product.title + `s` : product.title} added to basket`);
                                    }}
                            >
                                Add to Basket
                            </Button>
                            <Button 
                                variant="outline"
                                className="w-fit cursor-pointer border-brand text-brand hover:bg-brand/10"
                                onClick={() => router.push("/basket")}
                            >
                                View Basket
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}