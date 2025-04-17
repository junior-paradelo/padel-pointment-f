import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getCourts } from "./court.api";

export default async function CourtItem() {
    const courts = await getCourts();
    return (
        <div className="flex gap-4 items-center justify-center min-h-screen bg-background p-6">
            {courts.map((court) => (
                <Card key={court.id} className="w-full max-w-sm p-6">
                    <h2 className="text-2xl font-bold">{court.name}</h2>
                    <p className="text-sm text-muted-foreground">Location: {court.location}</p>
                    <p className="text-sm text-muted-foreground">Price: $20/hour</p>
                    <p className="text-sm text-muted-foreground">Rating: 4.5/5</p>
                    <p className="text-sm text-muted-foreground">Description: A great place to play padel.</p>
                    <Button className="p-4">Book now</Button>
                </Card>
            ))}
        </div>
    );
}
