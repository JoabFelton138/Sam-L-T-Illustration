import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";

interface QuantityInputProps {
    value: number;
    onChange: (value: number) => void;
    quantity: number;
    max?: number;
}
export const QuantityInput = ({ value, onChange, quantity, max = 10 }: QuantityInputProps) => {
    
    const decrement = () => onChange(Math.max(1, value - 1));
    const increment = () => onChange(Math.min(max, value + 1));
    const iconClass = "w-4 h-4 text-brand hover:text-brand/80";
    
    return (
        <div className="flex items-center justify-center gap-1">
            <span className="w-10 text-center font-medium">x {quantity}</span> 
            <button 
                type="button"
                aria-label="Decrease quantity"
                onClick={decrement}
                disabled={value <= 1}
                className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <CircleMinusIcon className={iconClass}/>
            </button>
            <button
                type="button"
                aria-label="Increase quantity"
                onClick={increment}
                disabled={value >= max}
                className="disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <CirclePlusIcon className={iconClass}/>
            </button>

        </div>
    );
}