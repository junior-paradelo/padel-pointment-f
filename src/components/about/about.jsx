import { BatteryCharging, GitPullRequest, Layers, RadioTower, SquareKanban, WandSparkles } from "lucide-react";

const props = {
    reasons: [
        {
            title: "Quality",
            description:
                "Guarantees secure and reliable reservations, with immediate confirmations and automatic notifications so you never miss your turn to play. Allows you to choose from highly rated clubs and courts, ensuring a high-level sports experience.",
            icon: <GitPullRequest className="size-6" />,
        },
        {
            title: "Experience",
            description:
                "Offers an intuitive and easy-to-use interface, allowing you to book in just a few clicks from any device, at any time. Allows you to check availability in real time and access additional services such as booking history and favorites management.",
            icon: <SquareKanban className="size-6" />,
        },
        {
            title: "Support",
            description:
                "Provides assistance and help in case of incidents, as well as the ability to modify or cancel reservations quickly and easily. ncludes reminders and notifications so you don't forget your matches and can quickly resolve any questions or issues.",
            icon: <RadioTower className="size-6" />,
        },
        {
            title: "Innovation",
            description:
                "Incorporates advanced features such as integrated secure payments, geolocation to find nearby courts, and creating matches or tournaments from the app itself. Allows you to organize open matches, register for events, and follow results in real time, enriching the user experience.",
            icon: <WandSparkles className="size-6" />,
        },
        {
            title: "Results",
            description:
                "Facilitates the organization and planning of your matches, ensuring you always find an available court when you need it. Allows you to track your reservations, matches played, and progress as a player, helping you improve your performance and make better use of your free time.",
            icon: <Layers className="size-6" />,
        },
        {
            title: "Efficiency",
            description:
                "Eliminates the need for calls or travel, saving time and effort in managing reservations. Centralizes all procedures in a single platform, allowing you to modify, cancel, or pay for reservations quickly and conveniently.",
            icon: <BatteryCharging className="size-6" />,
        },
    ],
};

function About() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 animate-zoom-in animate-duration-slow">
                    {props.reasons.map((reason, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                                {reason.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                            <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { About };
