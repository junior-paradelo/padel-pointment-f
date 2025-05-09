"use client";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleLogin } from "@/actions/index.js";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (formData) => {
        const { email, password } = Object.fromEntries(formData);
        handleLogin(email, password);
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>Enter your email below to login to your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form action={handleSubmit}>
                            <div className="flex flex-col gap-6">
                                <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring pl-2">
                                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        className="border-0 focus-visible:ring-0 shadow-none"
                                        name="email"
                                    />
                                </div>
                                <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                                    <LockIcon className="h-5 w-5 text-muted-foreground" />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="border-0 focus-visible:ring-0 shadow-none"
                                        name="password"
                                    />
                                    <button onClick={togglePasswordVisibility}>
                                        {showPassword ? (
                                            <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5 text-muted-foreground" />
                                        )}
                                    </button>
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="#" className="underline underline-offset-4">
                                    Sign up
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
