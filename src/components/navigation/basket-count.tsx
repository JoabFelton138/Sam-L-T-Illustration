import { Badge } from "../ui/badge";

interface BasketCountProps {
    minWidth?: string;
    height?: string;
    count?: number;
}

export const BasketCount = ({ count = 1, minWidth = "min-w-5", height = "h-5" }: BasketCountProps) => {
    return (
        <Badge className={`bg-brand text-white flex items-center justify-center text-xs px-1 ${minWidth} ${height}`}>
            {count}
        </Badge>
    )
}