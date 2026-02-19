import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BasketItem, Product } from "@/types/types";

interface BasketStore {
    items: BasketItem[];
    addItem: (product: Product, quantity: number) => void;
    removeItem: (product: Product) => void;
    updateQuantity: (product: Product, quantity: number) => void;
}

export const useBasketStore = create<BasketStore>()(
    persist(
        (set) => ({
            items: [],
            addItem: (product, quantity) => 
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.product.id === product.id
                    );
                    if (existingItem) {
                        return {
                            items: state.items.map((item) => 
                                item.product.id === product.id
                                ? {...item, quantity: item.quantity + quantity}
                                : item
                            ),
                        };
                    }
                    return {
                        items: [...state.items, {product, quantity}],
                    }
                }),
            removeItem: (product) => set(
                (state) => ({
                    items: state.items.filter((item) => item.product.id !== product.id)
                })
            ),
            updateQuantity: (product, quantity) => set((state) => ({
                items: state.items.map((item) => item.product.id === product.id 
                ? {...item, quantity}
                : item
            )}),)
        }),
        {
            name: "basket-storage",
        }
    )
);