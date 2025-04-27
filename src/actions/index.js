"use server";

import { loginUser } from "@/app/login/login.api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogin(email, password) {
    const result = await loginUser(email, password);
    const cookieStore = cookies();
    (await cookieStore).set(`${process.env.ACCESS_TOKEN_NAME}`, result.access_token);
    redirect("/");
}
