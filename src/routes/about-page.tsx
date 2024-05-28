import {H1, List, P} from "@/components/ui/typography";
import { Link } from "react-router-dom";

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">

            <H1>contact</H1>
            <P>the best way to contact me is via twitter dms</P>
            <List>
                <li>
                    {"twitter: "}
                    <Link to="https://twitter.com/ak_xcix" className="font-semibold hover:underline">
                        @ak_xcix
                    </Link>
                </li>
            </List>
            however i am also available on other platforms:
            <List>
                <li>
                    {"github: "}
                    <Link to="https://github.com/akxcix" className="font-semibold hover:underline">
                        @akxcix
                    </Link>
                </li>
                <li>
                    {"linkedin: "}
                    <Link to="https://linkedin.com/in/akxcix" className="font-semibold hover:underline">
                        @akxcix
                    </Link>
                </li>
                <li>
                    {"cal.com: "}
                    <Link to="https://cal.com/akxcix" className="font-semibold hover:underline">
                        @akxcix
                    </Link>
                </li>
                <li>
                    {"flickr: "}
                    <Link to="https://www.flickr.com/photos/adarsh_kumar/" className="font-semibold hover:underline">
                        @akxcix
                    </Link>
                </li>
                <li>
                    {"email: "}
                    [
                        <Link to="mailto:akumar814@gatech.edu" className="font-semibold hover:underline">
                            akumar814@gatech.edu
                        </Link>
                    ]
                    [
                        <Link to="mailto:contact@akxcix.com" className="font-semibold hover:underline">
                            contact@akxcix.com
                        </Link>
                    ]
                </li>
            </List>
            </div>
        </div>
    );
}