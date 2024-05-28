import { Outlet } from "react-router-dom";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Root() {
    return (
        <div id="root">
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex-1 flex flex-col">
                    <div className="flex h-full flex-row">
                        <div className="w-1/4 border-r">
                        </div>
                        <div className="w-1/2">
                            <div className="p-6">
                            <Outlet />
                            </div>
                        </div>
                        <div className="w-1/4 border-l">
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}