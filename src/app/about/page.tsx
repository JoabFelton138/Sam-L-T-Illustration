"use client";

import { useFadeIn } from "@/hooks/use-fade-in";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useFadeIn([imageRef, textRef]);
    const textSize = "md:text-[15px]";

    return (
        <main>
            <section className="grid px-6 py-12">                
                <div ref={imageRef} className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">                
                    <Image
                        src="/about-me.webp"
                        className="justify-self-center rounded object-cover aspect-square"
                        alt="sam"
                        width={575}
                        height={575}
                    />
                    <div ref={textRef} className="space-y-2 max-w-[500px] lg:max-w-[600px]">
                        <h2>{`Hey, I'm Sam!`}</h2>
                        <p className={textSize}>I’m a British illustrator and artist based in Bangkok, exploring film photography and obsessed with my cat, Egg.</p>
                        <p className={textSize}>In my early days, you’d find me tearing around the streets of Birmingham with friends—climbing trees, building forts, inventing entire worlds in our local park, and zooming downhill on skates. Creativity has always been rooted in play, curiosity, and adventure for me. </p>
                        <p className={textSize}>I graduated from the Cambridge School of Art in 2017 with a BA in Illustration. Shortly after, my path shifted towards education, and I moved into special educational needs as a primary and early years teacher. I completed my training at MSTSA in 2018, taught my first class, and hold those early teaching memories very close. </p>
                        <p className={textSize}>A few months later, I packed up and headed to Bangkok, drawn to a life lived between tuk-tuks and smiles. Since then, I’ve been exploring the world through colour, texture, and connection on the page. My illustration practice focuses on playful, tactile work rooted in nostalgia, care, and human connection. </p>
                        <p className={textSize}>I favour gouache, coloured pencil, and charcoal, but happily experiment with any medium that sparks my interest. Working internationally from Bangkok, I collaborate with brands and organisations across Asia and beyond. </p>
                        <p className={textSize}>My work has included social media illustration for Giffard Asia Pacific and a mural for Hunter’s Garden & Restaurant, as well as fundraising artwork auctioned in support of STEPS—an inclusive space supporting and empowering people with additional needs in the community to find employment and autonomy. </p>
                    </div>
                </div>
            </section>
        </main>
    );
}