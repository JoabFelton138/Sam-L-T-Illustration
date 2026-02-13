export interface Product {
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

export interface BasketItem {
    product: Product;
    quantity: number;
}