import Twemoji from "@/components/twemoji";
import { H1, H3, List, P } from "@/components/ui/typography";
import { Link } from "react-router-dom";

export default function PlacesPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">

                <H1 className="pb-6">places</H1>
                <H3>lived in:</H3>
                <List>
                    <li>
                        <Twemoji emoji="🇺🇸" /> {" "}
                        <Link to="https://www.google.com/maps/place/atlanta" className="hover:underline">
                            atlanta
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/bengaluru" className="hover:underline">
                            bengaluru
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/patiala" className="hover:underline">
                            patiala
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/ranchi" className="hover:underline">
                            ranchi
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/new+delhi" className="hover:underline">
                            new delhi
                        </Link>
                    </li>
                </List>
                <H3>visited:</H3>
                <List>
                    <li>
                        <Twemoji emoji="🇺🇸" /> {" "}
                        <Link to="https://www.google.com/maps/place/las+vegas" className="hover:underline">
                            las vegas
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇺🇸" /> {" "}
                        <Link to="https://www.google.com/maps/place/san+francisco" className="hover:underline">
                            san francisco
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇺🇸" /> {" "}
                        <Link to="https://www.google.com/maps/place/los+angeles" className="hover:underline">
                            los angeles
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇺🇸" /> {" "}
                        <Link to="https://www.google.com/maps/place/new+york+city" className="hover:underline">
                            new york city
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇦🇪" /> {" "}
                        <Link to="https://www.google.com/maps/place/dubai" className="hover:underline">
                            dubai
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/dharamshala" className="hover:underline">
                            dharamshala
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/manali" className="hover:underline">
                            manali
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/chennai" className="hover:underline">
                            chennai
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇹🇷" /> {" "}
                        <Link to="https://www.google.com/maps/place/kayseri" className="hover:underline">
                            kayseri
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇹🇷" /> {" "}
                        <Link to="https://www.google.com/maps/place/istanbul" className="hover:underline">
                            istanbul
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/puri" className="hover:underline">
                            puri
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/darjeeling" className="hover:underline">
                            darjeeling
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/gangtok" className="hover:underline">
                            gangtok
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/gaya" className="hover:underline">
                            gaya
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/port+blair" className="hover:underline">
                            port blair
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/kolkata" className="hover:underline">
                            kolkata
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/allahabad" className="hover:underline">
                            allahabad
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/rourkela" className="hover:underline">
                            rourkela
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/goa" className="hover:underline">
                            goa
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/mumbai" className="hover:underline">
                            mumbai
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/patna" className="hover:underline">
                            patna
                        </Link>
                    </li>
                    <li>
                        <Twemoji emoji="🇮🇳" /> {" "}
                        <Link to="https://www.google.com/maps/place/mussoorie" className="hover:underline">
                            mussoorie
                        </Link>
                    </li>
                </List>
                <P>fun fact: i have flown 100k+ kms</P>
            </div>
        </div>
    );
}