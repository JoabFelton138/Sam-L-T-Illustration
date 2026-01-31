"use client";
import { ProductDialog } from "@/components/ProductDialog";
import { Button } from "@/components/ui/button";
import {storeMockResponse} from "@/lib/storeMockResponse";
import Image from "next/image";
import { useState } from "react";

interface Product {
    id: string;
    title: string;
    handle: string;
    description: string;
    availableForSale: boolean;
    priceRange: {
        minVariantPrice: { amount: string; currencyCode: string };
        maxVariantPrice: { amount: string; currencyCode: string };
    };
    featuredImage: {
        url: string;
        altText?: string;
        width?: number;
        height?: number;
    };
}

export default function Shop () {
    const products = storeMockResponse.data.products.edges.map((edge) => edge.node);
    const [selectedItem, setSelectedItem] = useState<Product | null>(null);
    const [open, setOpen] = useState(false);

    const handleItemClick = (item: Product) => {
        setSelectedItem(item);
        setOpen(true);
    }

    return(
        <main className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 max-w-6xl mx-auto justify-items-center">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="text-center flex flex-col gap-4">
                                <div className="w-full max-w-[300px] aspect-square overflow-hidden rounded group">
                                    <Image 
                                        src={product.featuredImage.url} 
                                        alt={product.title} 
                                        width={300} 
                                        height={300} 
                                        className="rounded transition-transform duration-300 ease-out group-hover:scale-[1.03] will-change-transform"
                                        onClick={() => handleItemClick(product)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1 items-center">
                                    <p>{product.title}</p>
                                    <p>£{product.priceRange.minVariantPrice.amount}</p>
                                <Button
                                    size="sm"                                     
                                    className="w-fit cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide"
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <ProductDialog
                open={open}
                onOpenChange={setOpen}
                imageUrl={selectedItem?.featuredImage?.url ?? ''}
                altText={selectedItem?.title || ''}
                title={selectedItem?.title || ''}
                description={selectedItem?.description || ''}
                price={selectedItem ? parseFloat(selectedItem.priceRange.minVariantPrice.amount) : 0}
            />
        </main>
    );
};