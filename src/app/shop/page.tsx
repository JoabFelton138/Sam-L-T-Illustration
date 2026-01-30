"use client";
import { Button } from "@/components/ui/button";
import {storeMockResponse} from "@/lib/storeMockResponse";
import Image from "next/image";

export default function Shop () {
    const products = storeMockResponse.data.products.edges.map((edge) => edge.node);
    console.log(products);
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
        </main>
    );
};