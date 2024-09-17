import { H1, P } from "@/components/ui/typography";
import { Link } from "react-router-dom";

export default function PlacesPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">

                <H1 className="pb-6">places</H1>
                <div className="flex flex-row py-8">
                    <div className="grow"/>
                    <Link to={"https://www.flagofplanetearth.com/"}>
                    <div className="border border-dashed p-8 text-center">
                        
                        <img src="img/ifope.jpg" className="h-40 border border-dashed"/>
                        <P>Flag of Planet Earth</P>
                    </div>
                    </Link>
                    <div className="grow"/>
                </div>
            </div>
        </div>
    );
}