import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BookOpen, Home, Rss, Mail } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const navigationMenuItems = [
    { title: "Home", href: "#", icon: Home, isActive: true },
    { title: "Courts", href: "#court", icon: BookOpen },
    { title: "Blog", href: "#blog", icon: Rss },
];

function Navbar() {
    return (
        <nav id="navbar" className="flex justify-between items-center p-4 bg-background border-b">
            <h1 className="text-4xl font-bold">Padel Pointment</h1>
            <NavigationMenu>
                <NavigationMenuList className="space-x-8">
                    {navigationMenuItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link href={item.href}>
                                    <item.icon className="h-5 w-5 mr-2" />
                                    {item.title}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Link href="/login" className={buttonVariants({ variant: "secondary" })}>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Link>
        </nav>
    );
}

export default Navbar;
