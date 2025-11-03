import flowersOnBlue from "../../public/illustrations/flowers-on-blue.webp";
import frogWaterskiing from "../../public/illustrations/frog-waterskiing.webp";
import spooky from "../../public/illustrations/spooky.gif";

import funkyMonkey from "../../public/illustrations/funky-monkey.webp";
import ginghamGirl from "../../public/illustrations/gingham-girl.webp";
import portraitLeft from "../../public/illustrations/portrait-left.webp";

import portraitRight from "../../public/illustrations/portrait-right.webp";
import bugs from "../../public/illustrations/bugs.webp";
import tomYum from "../../public/illustrations/tom-yum.webp";

import { StaticImageData } from "next/image";

export type GalleryItem = {
    image: StaticImageData;
    title: string;
    description?: string;
}

export const illustrations: GalleryItem[] = [
    {
        image: tomYum,
        title: "Portrait Left",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: portraitLeft,
        title: "Essentials",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: frogWaterskiing,
        title: "Rainbow Halo",
        description: "Lorem ipsum dolor sit amet."
    },

    {
        image: flowersOnBlue,
        title: "Spooky",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: spooky,
        title: "Snowy",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: bugs,
        title: "Explorer",
        description: "Lorem ipsum dolor sit amet."
    },

    {
        image: funkyMonkey,
        title: "Portrait Right",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: portraitRight,
        title: "Flowers on Blue",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: ginghamGirl,
        title: "Bugs",
        description: "Lorem ipsum dolor sit amet."
    }

]