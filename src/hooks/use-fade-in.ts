import { useEffect, RefObject } from "react";

export function useFadeIn(refs: RefObject<HTMLElement | null>[]) {
    useEffect(() => {
        refs.forEach((ref) => {
            if (ref.current) {
                ref.current.classList.add('animate-fade-in-up');
            }
        });
    }, [refs]);
}