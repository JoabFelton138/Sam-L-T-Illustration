"use client"

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRef } from "react";  
import { useFadeIn } from "@/hooks/use-fade-in";

const formSchema = z.object({
    name: z.string().regex(/^[a-zA-Z]{2,}\s+[a-zA-Z]{2,}$/, "Name must be two words, each at least 2 characters"),    
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    subject: z.string().min(3, "Subject must be more than 3 characters")
                       .max(100, "Subject must be less than 100 characters")
                       .trim(),
    message: z.string().min(10, "Message must be at least 10 characters")
                       .max(1000, "Message must be less than 1000 characters")
                       .trim(),
});

export default function Contact() {
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLImageElement>(null);

    useFadeIn([imageRef, textRef]);
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async(data: z.infer<typeof formSchema>) => {
        try {
            console.log(data);
            form.reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="flex flex-col lg:flex-row justify-center items-center gap-14 px-5 sm:px-6 lg:px-8 py-12 sm:py-5 max-w-7xl mx-auto">
            <div ref={textRef}>                
                <form className="flex-1 w-full max-w-xl lg:max-w-lg" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldLegend className="sr-only">
                            Contact Form
                        </FieldLegend>
                        <FieldTitle>
                            <h2>Contact</h2>
                        </FieldTitle>
                        <FieldDescription>
                            {`Contact me if you're interested in an original artwork, commission or even just fancy saying hi!`}
                        </FieldDescription>
                        <FieldGroup className="gap-4">
                                <Field>
                                    <FieldLabel htmlFor="name">
                                        Full Name
                                    </FieldLabel>
                                    <Input id="name" type="text" {...form.register("name")}/>
                                    <FieldError >
                                        {form.formState.errors?.name?.message || "\u00A0"}
                                    </FieldError>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email
                                    </FieldLabel>
                                    <Input id="email" type="email" {...form.register("email")}/>
                                    <FieldError >
                                        {form.formState.errors?.email?.message || "\u00A0"}
                                    </FieldError>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="subject">
                                        Subject
                                    </FieldLabel>
                                    <Input id="subject" type="text" {...form.register("subject")}/>
                                    <FieldError >
                                        {form.formState.errors?.subject?.message || "\u00A0"}
                                    </FieldError>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="message">
                                        Message
                                    </FieldLabel>
                                    <Textarea id="message" {...form.register("message")}/>
                                    <FieldError >
                                        {form.formState.errors?.message?.message || "\u00A0"}
                                    </FieldError>
                                </Field>
                                <div className="pt-2 flex justify-center lg:justify-start">
                                    <Button 
                                        className="w-auto min-w-[140px] cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide"
                                        type="submit">
                                            SUBMIT
                                    </Button>
                                </div>
                        </FieldGroup>
                    </FieldSet>
                </form>
            </div>
            <div ref={imageRef} className="flex hidden lg:block">                
                <Image src="/eggy.webp" 
                   alt="Eggy" 
                   className="rounded object-contain w-full h-auto" 
                   width={420} 
                   height={110} 
                />
            </div>
        </main>
    );
}