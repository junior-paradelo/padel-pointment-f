import { GithubIcon, Mails } from "lucide-react";

function Footer() {
    return (
        <section class="md:pt-6">
            <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
                <a
                    href="/"
                    class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100"
                    title="title"
                >
                    padel-pointment
                </a>
                <a
                    class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
                    href="/"
                    title="copyright"
                >
                    &copy; {new Date().getFullYear()} All rights reserved.
                </a>
                <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a title="Email" class="text-gray-400 hover:text-gray-500" href="mailto:juniorparadelo@gmail.com">
                        <span class="sr-only"></span>
                        <Mails />
                    </a>
                    <a
                        href="https://github.com/junior-paradelo"
                        target="_blank"
                        title="GitHub"
                        class="text-gray-400 hover:text-gray-500"
                    >
                        <span class="sr-only"></span>
                        <GithubIcon />
                    </a>
                </span>
            </div>
        </section>
    );
}

export { Footer };
