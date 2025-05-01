import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CircleHelpIcon } from "lucide-react";

function CourtCard({ name, location, price }) {
    return (
        <Card className="max-w-xs">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{name}</CardTitle>
                <CardDescription>{location}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex items-end leading-6">
                <span className="text-4xl leading-none font-bold text-foreground">${price}</span>
                <span className="ml-1.5 mr-1">/match</span>
                <Tooltip>
                    <TooltipTrigger className="mb-1">
                        <CircleHelpIcon className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                        <p>
                            Seats are required for users to connect calendars and create Calendly links to help book
                            meetings - meeting invitees do not require an account or seat.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </CardContent>
            <CardFooter className="mt-2 flex justify-between">
                <Button size="lg" className="w-full cursor-pointer">
                    Book now
                </Button>
            </CardFooter>
        </Card>
    );
}

export { CourtCard };
