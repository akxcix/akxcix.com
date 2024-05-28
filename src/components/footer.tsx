import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="header" className="mb-0">
            <footer className="sticky flex h-16 items-center gap-4 border-t bg-background px-4 md:px-6">
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto mr-auto flex-1 sm:flex-initial">
                        <div className="flex items-center gap-2 text-lg md:text-base">
                        made with precision and passion by 
                        <Link to="/" className="font-semibold hover:underline">akxcix</Link>
                        on 
                        <Link to="/places" className="font-semibold hover:underline">earth</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}