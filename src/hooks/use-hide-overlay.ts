import { useCallback, useEffect, useState } from "react";

export function useHideOverlay(open: boolean, imageUrl: string) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [open, imageUrl]);

    const onImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    return { imageLoaded, onImageLoad };
}