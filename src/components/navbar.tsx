import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

const headerLinks = [
    {
        name: 'about',
        link: '/about'
    },
    {
        name: 'newsletter',
        link: 'https://akxcix.substack.com/'
    },
    {
        name: 'projects',
        link: '/projects'
    },
    {
        name: 'contact',
        link: '/contact'
    },
];

export default function Navbar() {
    return (
        <div id="header">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link to="/" className="flex gap-2 text-lg font-semibold md:text-base">
                        akxcix
                    </Link>
                    {headerLinks.map((link, index) => (
                        <Link key={index} to={link.link} className="hover:underline">{link.name}</Link>
                    ))}
                </nav>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex-1 sm:flex-initial" />
                    <ModeToggle />
                </div>
            </header>
        </div>
    );
}