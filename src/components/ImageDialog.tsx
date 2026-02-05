import { useHideOverlay } from "@/hooks/use-hide-overlay";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";

interface ImageDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    imageUrl: string;
    altText?: string;
    title: string;
    description: string;
}

export const ImageDialog = ({open, onOpenChange, imageUrl, altText, title, description} : ImageDialogProps) => {
    
    const { imageLoaded, onImageLoad } = useHideOverlay(open, imageUrl);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent variant="image" className="bg-transparent border-0 shadow-none data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100">
                <DialogTitle className="sr-only">{title}</DialogTitle>
                <div className="relative inline-block">
                    <img
                        src={imageUrl}
                        alt={altText ?? ""}
                        className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-lg block"
                        onLoad={onImageLoad}
                    />
                    {imageLoaded && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 rounded-b-lg">
                            <span className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-2 title-style block">{title}</span>
                            <DialogDescription className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed">{description}</DialogDescription>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}