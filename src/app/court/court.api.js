export async function getCourts() {
    const courts = await fetch(`${process.env.URL_API}/court`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.PADEL_POINTMENT_API_KEY}`,
        },
    });
    return await courts.json();
}
