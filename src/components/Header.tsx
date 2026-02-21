import { cn } from "@/lib/utils";

interface HeaderProps {
    title: string;
    className?: string;
}   

export const Header = ({ title, className }: HeaderProps) => {
    return (
        <header>
            <div className={cn("flex flex-col items-center justify-center pt-2 pb-8", className)}>
                <h2>{title}</h2>
            </div>
        </header>
    );
}