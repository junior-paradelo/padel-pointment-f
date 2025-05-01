import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

function Header() {
    return (
        <nav id="navbar" className="flex justify-between items-center p-4 bg-background border-b">
            <div class="flex items-center justify-start w-1/4 h-full pr-4">
                <a
                    href="/"
                    title="title"
                    class="flex items-center py-4 space-x-2 text-xl font-black text-gray-900 dark:text-gray-100 md:py-0"
                >
                    <Image
                        src="/images/logo.png"
                        width={32}
                        height={32}
                        alt="padel-pointment logo"
                        className="rounded-full"
                    />
                    <span class="mx-2">padel-pointment</span>
                </a>
            </div>
            <Link href="/login" className={buttonVariants({ variant: "secondary" })}>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Link>
        </nav>
    );
}

export { Header };
