import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
    return (
        <section className="flex justify-between">
            <h1 className="text-4xl font-bold">Padel Pointment</h1>
            <Link href="/login" className={buttonVariants({ variant: "default" })}>
                Login
            </Link>
        </section>
    );
}
