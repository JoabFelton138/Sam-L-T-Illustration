import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

interface ProductDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    imageUrl: string;
    altText?: string;
    title: string;
    description: string;
    price: number;
}

export const ProductDialog = ({open, onOpenChange, imageUrl, altText, title, description, price} : ProductDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden border-0 shadow-none sm:max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] min-h-0">
                    <div className="p-0">
                        <Image
                            src={imageUrl}
                            alt={altText ?? ''}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-white p-6 overflow-y-auto flex flex-col gap-4 justify-center">
                        <DialogTitle>{title}</DialogTitle>
                        <p>£{price}</p>
                        <p>{description}</p>
                        <Button 
                            className="w-fit cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}