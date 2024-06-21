import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="header" className="mb-0">
            <footer className="sticky flex h-16 items-center gap-4 border-t border-dashed bg-background px-4">
                <div className="flex w-full items-center gap-4 ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto mr-auto flex-1 flex-initial">
                        <div className="flex items-center gap-2 text-lg md:text-base">
                        made
                        on 
                        <Link to="/places" className="font-semibold hover:underline">earth</Link>
                        by 
                        <Link to="/" className="font-semibold hover:underline">akxcix</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}