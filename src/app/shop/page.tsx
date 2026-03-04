"use client";
import { Header } from "@/components/Header";
import {storeMockResponse} from "@/lib/storeMockResponse";
import Image from "next/image";
import Link from "next/link";

export default function Shop () {
    const products = storeMockResponse.data.products.edges.map((edge) => edge.node);
    const borderHoverEffect = "group-hover:text-brand-hover transition-colors duration-300 ease-out";
    const soldOut = "font-semibold";

    return(
        <main className="px-4">
            <Header title="Shop" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 max-w-6xl mx-auto justify-items-center">                
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="text-center flex flex-col gap-4">
                                <div className="w-full max-w-[300px] aspect-square overflow-hidden rounded group relative">
                                    {!product.availableForSale && 
                                        <div className={`flex flex-col items-center justify-center leading-none absolute top-2 right-2 z-10 w-14 h-14 rounded-full border-2 text-brand border-current ${borderHoverEffect}`}>
                                            <span className={soldOut}>SOLD</span>
                                            <span className={soldOut}>OUT</span>
                                        </div>
                                    }
                                    <Link href={`/shop/${product.handle}`}>
                                        <Image 
                                            src={product.featuredImage.url} 
                                            alt={product.title} 
                                            width={300} 
                                            height={300} 
                                            className="rounded transition-transform duration-300 ease-out group-hover:scale-[1.05] will-change-transform cursor-pointer"
                                        />
                                    </Link>
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
        </main>
    );
};