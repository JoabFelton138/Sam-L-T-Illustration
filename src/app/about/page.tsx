import Image from "next/image";

export default function About() {
    return (
        <main>
            <header>
            </header>
            <section className="grid px-6 py-12">                
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">                
                    <Image src="/phil/feed-phil-orange.webp" className="justify-self-center rounded" alt="Feed Phil" width={500} height={300} />
                    <div className="space-y-4 max-w-[500px] lg:max-w-[600px]">
                        <h2>{`Hey, I'm Sam!`}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae sapien nec justo tincidunt tincidunt. Integer euismod, nisl a fermentum tincidunt, sapien justo convallis nulla, nec facilisis lorem justo at erat. Sed in efficitur sapien. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        <p>Vivamus vel sapien nec libero tincidunt vehicula. Fusce ac justo nec sapien tincidunt tristique. Etiam nec lorem ac justo tincidunt convallis. Nulla facilisi. Aenean vel sem ac justo tincidunt tincidunt. Sed euismod, sapien nec tincidunt tincidunt, justo sapien tincidunt sapien, nec tincidunt sapien sapien nec sapien.</p>
                        <p>Praesent tincidunt sapien nec sapien tincidunt, nec tincidunt sapien tincidunt. Sed tincidunt sapien nec sapien tincidunt tincidunt. Integer tincidunt sapien nec sapien tincidunt tincidunt.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}