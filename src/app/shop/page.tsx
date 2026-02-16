"use client";
import { Header } from "@/components/Header";
import { ProductDialog } from "@/components/ProductDialog";
import {storeMockResponse} from "@/lib/storeMockResponse";
import { Product } from "@/types/types";
import Image from "next/image";
import { useState } from "react";


export default function Shop () {
    const products = storeMockResponse.data.products.edges.map((edge) => edge.node);
    const [selectedItem, setSelectedItem] = useState<Product | null>(null);
    const [open, setOpen] = useState(false);

    const handleItemClick = (item: Product) => {
        setSelectedItem(item);
        setOpen(true);
    }

    return(
        <main className="px-4">
            <Header title="Shop" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 max-w-6xl mx-auto justify-items-center">                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="text-center flex flex-col gap-4">
                                <div className="w-full max-w-[300px] aspect-square overflow-hidden rounded group">
                                    <Image 
                                        src={product.featuredImage.url} 
                                        alt={product.title} 
                                        width={300} 
                                        height={300} 
                                        className="rounded transition-transform duration-300 ease-out group-hover:scale-[1.05] will-change-transform cursor-pointer"
                                        onClick={() => handleItemClick(product)}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2 items-center">
                                    <p className="font-semibold">{product.title}</p>
                                    <div className="flex flex-col gap-2">
                                        <p>£{product.priceRange.minVariantPrice.amount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <ProductDialog
                open={open}
                onOpenChange={setOpen}
                product={selectedItem}
            />
        </main>
    );
};