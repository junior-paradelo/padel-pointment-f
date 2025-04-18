export async function getCourts() {
    const courts = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/court`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return await courts.json();
}
