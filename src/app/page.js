import { About } from "@/components/about/about";
import { CourtCard } from "@/components/court/card";
import { getCourts } from "@/components/court/court.api";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";

export default async function Home() {
    const courts = await getCourts();

    return (
        <>
            <Header />
            <Hero />
            <About />
            <section className="py-24">
                <div className="container">
                    <div className="flex flex-wrap gap-4 items-start justify-center">
                        {courts.map((court) => (
                            <div className="w-80 h-80 hover:animate-float hover:animate-duration-fast" key={court.id}>
                                <CourtCard name={court.name} location={court.location} price={27} className="h-full" />
                            </div>
                        ))}
                        {courts.length === 0 && <p className="">No courts available at the moment.</p>}
                    </div>
                </div>
            </section>
        </>
    );
}
