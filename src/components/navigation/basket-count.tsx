import { Badge } from "../ui/badge";

interface BasketCountProps {
    count?: number;
}

export const BasketCount = ({ count = 1 }: BasketCountProps) => {
    return (
        <Badge className="bg-brand text-white min-w-5 h-5 flex items-center justify-center text-xs px-1">
            {count}
        </Badge>
    )
}