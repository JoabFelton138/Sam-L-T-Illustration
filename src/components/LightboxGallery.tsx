import { illustrations } from "@/lib/illustrations";
import { photos } from "@/lib/photos";
import Image from "next/image";

interface LightboxGalleryProps {
    content: 'illustrations' | 'photography';
}

export function LightboxGallery({ content} : LightboxGalleryProps) {
    const images =  content === 'illustrations' ? illustrations : photos;
    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {images.map((image, index) => 
                    <div key={index} 
                         className="relative group mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded">
                        <Image 
                            src={image.image} 
                            alt={image.title} 
                            className="w-full h-auto rounded block transition-transform duration-300 ease-out group-hover:scale-[1.03] will-change-transform" 
                        />
                        <div className="pointer-events-none absolute inset-0 rounded bg-white/55 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
                        <div className="pointer-events-none absolute top-0 left-0">
                            <div className="m-2 font-extrabold rounded px-2 py-1 opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                                {image.description?.toUpperCase()}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}