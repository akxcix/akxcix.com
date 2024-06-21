import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LeftDiv from "@/components/left-div";
// import GithubRepoWidget from "@/components/widgets/gh-repo-widget";

export default function Root() {
    return (
        <div id="root">
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex-1 flex flex-col">
                    <div className="flex h-full flex-col md:flex-row">
                        <LeftDiv />
                        <div className="w-full md:w-2/4 border-dashed border-l border-r">
                            <div className="p-6">
                                <Outlet />
                            </div>
                        </div>
                        <div className="grow" />
                        <div className="flex flex-col w-full md:w-1/4">
                            {/* <div className="p-4">
                                <GithubRepoWidget />
                            </div> */}
                            <div className="grow" />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}