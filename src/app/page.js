import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { getCourts } from "./court/court.api";

export default async function Home() {
    const courts = await getCourts();
    return (
        <>
            <nav id="navbar" className="flex justify-between items-center p-4 bg-background border-b">
                <h1 className="text-4xl font-bold">Padel Pointment</h1>
                <Link href="/login" className={buttonVariants({ variant: "secondary" })}>
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Link>
            </nav>
            <section id="hero" className="text-center rounded-2xl mt-24 text-black py-20 px-4">
                <p className="text-4xl font-extrabold mb-4">
                    Welcome to Padel Pointment, your go-to platform for booking padel courts.
                </p>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Find available courts near you, check prices, and book your next game easily.
                </p>
                <p className="text-lg italic">Enjoy a seamless booking experience and get ready to play!</p>
            </section>
            <section id="courts" className="p-6 mt-24">
                <div className="flex gap-4 items-start justify-center min-h-screen bg-background">
                    {courts.map((court) => (
                        <Card key={court.id} className="w-full max-w-sm p-6 flex flex-col gap-2 hover:animate-tilt">
                            <h3 className="text-2xl font-bold">{court.name}</h3>
                            <p className="text-sm ">
                                <span className="font-medium text-foreground">Location:</span> {court.location}
                            </p>
                            <p className="text-sm ">
                                <span className="font-medium text-foreground">Price:</span>{" "}
                                <span className="font-semibold">$20/hour</span>
                            </p>
                            <p className="text-sm ">
                                <span className="font-medium text-foreground">Rating:</span> 4.5/5
                            </p>
                            <p className="text-sm  flex-grow">
                                <span className="font-medium text-foreground">Description:</span> A great place to play
                                padel.
                            </p>
                            <Button className="mt-4 w-full">Book now</Button>
                        </Card>
                    ))}
                    {courts.length === 0 && <p className="">No courts available at the moment.</p>}
                </div>
            </section>
        </>
    );
}
