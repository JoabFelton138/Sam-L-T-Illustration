import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <main>
            <form className="max-w-lg mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-5">
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
                    <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">
                                    Full Name
                                </FieldLabel>
                                <Input id="name" type="text"/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">
                                    Email
                                </FieldLabel>
                                <Input id="name" type="email"/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="subject">
                                    Subject
                                </FieldLabel>
                                <Input id="name" type="text"/>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="message">
                                    Message
                                </FieldLabel>
                                <Textarea id="message" />
                            </Field>
                            <div>
                                <Button 
                                    className="w-auto min-w-[140px] cursor-pointer bg-brand hover:bg-brand/80 text-white font-bold tracking-wide"
                                    type="submit">
                                        SUBMIT
                                </Button>
                            </div>
                    </FieldGroup>
                </FieldSet>
            </form>
        </main>
    );
}