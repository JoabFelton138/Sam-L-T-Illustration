import { useBasketStore } from "@/store/basket-store";
import { Badge } from "../ui/badge";

interface BasketCountProps {
    minWidth?: string;
    height?: string;
    count?: number;
}

export const BasketCount = ({ minWidth = "min-w-5", height = "h-5" }: BasketCountProps) => {
    
    const count = useBasketStore((state) => 
        state.items.reduce((acc, item) => acc + item.quantity, 0)
    );
    
    return (
        count > 0 ? (
            <Badge className={`bg-brand text-white flex items-center justify-center text-xs px-1 ${minWidth} ${height}`}>
                {count}
            </Badge>
        ) : null
    );
}