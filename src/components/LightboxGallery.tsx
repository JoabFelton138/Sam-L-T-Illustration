'use client';

import { GalleryItem, illustrations } from "@/lib/illustrations";
import { photos } from "@/lib/photos";
import Image from "next/image";
import { ImageDialog } from "./ImageDialog";
import { useState, useEffect, useRef, useCallback } from "react";
import { Spinner } from "./ui/spinner";
import Masonry from "react-masonry-css";

interface LightboxGalleryProps {
    content: 'illustrations' | 'photography';
}


export function LightboxGallery({ content} : LightboxGalleryProps) {

    const images =  content === 'illustrations' ? illustrations : photos;
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const displayedImages = images.slice(0, currentIndex);
    
    const breakpointColumnsObj = {
        default: 3,
        1024: 3,
        640: 2,
        0: 1
    };

    const loadMoreImages = useCallback(() => {
        if (currentIndex >= images.length || isLoading) {
            return ;
        }
        setIsLoading(true);
        setShowSpinner(true);

        // Simulate loading delay, then add images
        setTimeout(() => {
            setCurrentIndex(prevIndex => prevIndex + 6);
            setIsLoading(false);
            setShowSpinner(false);
        }, 500);
    }, [currentIndex, images.length, isLoading]);

    const handleImageClick = (item: GalleryItem) => {
        setSelectedItem(item);
        setOpen(true);
    }

    useEffect(() => {
        if (!sentinelRef.current) return;

        const callback = ((entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (entry?.isIntersecting) {
                loadMoreImages();
            }
        });

        const options = { root: null, rootMargin: '0px', threshold: 0};

       const observer = new IntersectionObserver(callback, options);
       observer.observe(sentinelRef.current);

       return () => observer.disconnect();
    }, [currentIndex, images.length, isLoading, loadMoreImages]);

    useEffect(() => {
        setCurrentIndex(6);
        setIsLoading(false);
        setShowSpinner(false);
    }, [content]);
    
    return (
        <div className="mx-auto max-w-7xl p-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {displayedImages.map((image, index) => 
                    <div key={`${image.title}-${index}`} 
                         className="relative group mb-4 cursor-pointer overflow-hidden rounded">
                        <Image 
                            src={image.image} 
                            alt={image.title} 
                            className="w-full h-auto rounded block transition-transform duration-300 ease-out group-hover:scale-[1.03] will-change-transform" 
                            onClick={() => handleImageClick(image)}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded bg-white/55 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
                        <div className="pointer-events-none absolute top-0 left-0">
                            <div className="m-2 font-extrabold rounded px-2 py-1 opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                                {image.description?.toUpperCase()}
                            </div>
                        </div>
                    </div>
                )}
            </Masonry>
            {showSpinner && (
                <div className="flex justify-center items-center h-20 mt-4 gap-2">
                    <Spinner className="size-14 text-brand"/>
                    <span className="text-brand text-sm">Loading more images...</span>
                </div>
            )}
            <div ref={sentinelRef} className="h-1 w-full block"></div>
            <ImageDialog 
                open={open} 
                onOpenChange={setOpen} 
                imageUrl={selectedItem?.image.src || ''} 
                title={selectedItem?.title || ''} 
                description={selectedItem?.description || ''} 
            />    
        </div>
    );
}