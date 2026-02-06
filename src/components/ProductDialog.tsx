import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

interface ProductDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    imageUrl: string;
    altText?: string;
    title: string;
    description: string;
    price: number;
}

const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const buttonClass = "w-fit cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide";

export const ProductDialog = ({
    open,
    onOpenChange,
    imageUrl,
    altText,
    title,
    description,
    price,
}: ProductDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl max-h-[90vh] p-0 overflow-hidden border-0 shadow-none">                
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] min-h-0">
                    <Image
                        src={imageUrl}
                        alt={altText ?? ""}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover max-h-[50vh] md:max-h-none"
                    />
                    <div className="bg-white p-6 overflow-y-auto flex flex-col gap-4 justify-center">
                        <DialogTitle>{title}</DialogTitle>
                        <p>£{price}</p>
                        <div className="flex flex-row items-center gap-2">
                            <label
                                htmlFor="form-quantity"
                                className="text-sm font-medium text-[#2C3E50] shrink-0"
                            >
                                Quantity
                            </label>
                            <Select defaultValue="1">
                                <SelectTrigger
                                    id="form-quantity"
                                    className="w-16"
                                >
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {quantity.map((q) => (
                                        <SelectItem
                                            key={q}
                                            value={q.toString()}
                                        >
                                            {q}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <p>{description}</p>
                        <div className="flex flex-row items-center gap-2">
                            <Button className={buttonClass}>
                                Add to Basket
                            </Button>
                            <Button className={buttonClass}>
                                View Basket
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
