import birdInNest from "../../public/illustrations/bird-in-nest.webp";
import essentials from "../../public/illustrations/essentials.webp";
import explorer from "../../public/illustrations/explorer.webp";
import flowersOnBlue from "../../public/illustrations/flowers-on-blue.webp";
import frogWaterskiing from "../../public/illustrations/frog-waterskiing.webp";
import flowerYellow from "../../public/illustrations/flower-yellow.webp";
import ginghamGirl from "../../public/illustrations/gingham-girl.webp";
import girls from "../../public/illustrations/girls.webp";
import octopusPainting from "../../public/illustrations/octopus-painting.webp";
import peach from "../../public/illustrations/peach.webp";
import racoonWithStars from "../../public/illustrations/racoon-with-stars.webp";
import sharks from "../../public/illustrations/sharks.webp";
import snowy from "../../public/illustrations/snowy.webp";

import type { StaticImageData } from "next/image";

export type GalleryItem = {
    image: StaticImageData;
    title: string;
    description?: string;
}

export const illustrations: GalleryItem[] = [
    //col 1
    {
        image: racoonWithStars,
        title: "Racoon with Stars",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: birdInNest,
        title: "OctopusPainting",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: flowersOnBlue,
        title: "Flowers on Blue",
        description: "Lorem ipsum dolor sit amet."
    },
    //col 2
    {
        image: frogWaterskiing,
        title: "Frog Waterskiing",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: snowy,
        title: "Snowy",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: peach,
        title: "Peach",
        description: "Lorem ipsum dolor sit amet."
    },
    //col 3
    {
        image: girls,
        title: "Girls",
        description: "Lorem ipsum dolor sit amet."
    },
    {
        image: explorer,
        title: "Explorer",
        description: "Lorem ipsum dolor sit amet."
    },

    {
        image: ginghamGirl,
        title: "Gingham Girl",
        description: "Lorem ipsum dolor sit amet."
    }
]