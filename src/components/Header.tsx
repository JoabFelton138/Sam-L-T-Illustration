export const Header = ({ title }: { title: string }) => {
    return (
        <header>
            <div className="flex flex-col items-center justify-center pt-2 pb-8">
                <h2>{title}</h2>
            </div>
        </header>
    );
}