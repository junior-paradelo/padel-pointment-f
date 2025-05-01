import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

function Hero() {
    const props = {
        heading: "your go-to platform for booking padel courts",
        description:
            "Find available courts near you, check prices, and book your next game easily. Enjoy a seamless booking experience and get ready to play!",
        reviews: {
            count: 200,
            rating: 5.0,
            avatars: [
                {
                    src: "/images/avatar1.webp",
                    alt: "Avatar 1",
                },
                {
                    src: "/images/avatar2.webp",
                    alt: "Avatar 2",
                },
                {
                    src: "/images/avatar3.webp",
                    alt: "Avatar 3",
                },
                {
                    src: "/images/avatar4.webp",
                    alt: "Avatar 4",
                },
                {
                    src: "/images/avatar5.webp",
                    alt: "Avatar 5",
                },
            ],
        },
    };
    return (
        <section className="py-24">
            <div className="container text-center">
                <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
                    <h1 className="text-3xl font-extrabold lg:text-6xl">{props.heading}</h1>
                    <p className="text-balance text-muted-foreground lg:text-lg">{props.description}</p>
                </div>
                <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
                    <span className="mx-4 inline-flex items-center -space-x-4">
                        {props.reviews.avatars.map((avatar, index) => (
                            <Avatar key={index} className="size-14 border">
                                <AvatarImage src={avatar.src} alt={avatar.alt} />
                            </Avatar>
                        ))}
                    </span>
                    <div>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="size-5 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="mr-1 font-semibold">{props.reviews.rating?.toFixed(1)}</span>
                        </div>
                        <p className="text-left font-medium text-muted-foreground">
                            from {props.reviews.count}+ reviews
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export { Hero };
