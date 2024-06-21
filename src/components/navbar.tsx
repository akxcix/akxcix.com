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
            <header className="sticky top-0 flex h-16 items-center gap-4 border-dashed border-b bg-background px-4">
                <nav className="flex flex-row items-center gap-5 text-sm">
                    <Link to="/" className="flex gap-2 text-base font-semibold">
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