import img1 from "../../public/illustrations/img1.webp";
import img2 from "../../public/illustrations/img2.webp";
import img3 from "../../public/illustrations/img3.webp";
import img4 from "../../public/illustrations/img4.webp";
import img5 from "../../public/illustrations/img5.webp";
import img6 from "../../public/illustrations/img6.webp";
import img7 from "../../public/illustrations/img7.webp";
import img8 from "../../public/illustrations/img8.webp";
import img9 from "../../public/illustrations/img9.webp";
import img10 from "../../public/illustrations/img10.webp";
import img11 from "../../public/illustrations/img11.webp";
import img12 from "../../public/illustrations/img12.webp";

import type { StaticImageData } from "next/image";

export type GalleryItem = {
    image: StaticImageData;
    title: string;
    description?: string;
}

export const illustrations: GalleryItem[] = [
    {
        image: img1,
        title: "IMAGE 1",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img2,
        title: "IMAGE 2",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img12,
        title: "IMAGE 12",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img4,
        title: "IMAGE 4",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img10,
        title: "IMAGE 10",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img9,
        title: "IMAGE 9",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img7,
        title: "IMAGE 7",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img8,
        title: "IMAGE 8",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img6,
        title: "IMAGE 6",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img5,
        title: "IMAGE 5",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img11,
        title: "IMAGE 11",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: img3,
        title: "IMAGE 3",
        description: "Lorem ipsum dolor sit amet."
    },
]