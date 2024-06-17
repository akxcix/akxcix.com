import Twemoji from "@/components/twemoji";
import { H1, H3, List, P } from "@/components/ui/typography";
import { Link } from "react-router-dom";

const placesLived = [
    {
        flag: "🇺🇸",
        name: "atlanta",
        link: "https://www.google.com/maps/place/atlanta"
    },
    {
        flag: "🇮🇳",
        name: "bengaluru",
        link: "https://www.google.com/maps/place/bengaluru"
    },
    {
        flag: "🇮🇳",
        name: "patiala",
        link: "https://www.google.com/maps/place/patiala"
    },
    {
        flag: "🇮🇳",
        name: "ranchi",
        link: "https://www.google.com/maps/place/ranchi"
    },
    {
        flag: "🇮🇳",
        name: "new delhi",
        link: "https://www.google.com/maps/place/new+delhi"
    }
];

const placesVisited = [
    {
        flag: "🇺🇸",
        name: "las vegas",
        link: "https://www.google.com/maps/place/las+vegas"
    },
    {
        flag: "🇺🇸",
        name: "san francisco",
        link: "https://www.google.com/maps/place/san+francisco"
    },
    {
        flag: "🇺🇸",
        name: "los angeles",
        link: "https://www.google.com/maps/place/los+angeles"
    },
    {
        flag: "🇺🇸",
        name: "new york city",
        link: "https://www.google.com/maps/place/new+york+city"
    },
    {
        flag: "🇦🇪",
        name: "dubai",
        link: "https://www.google.com/maps/place/dubai"
    },
    {
        flag: "🇮🇳",
        name: "dharamshala",
        link: "https://www.google.com/maps/place/dharamshala"
    },
    {
        flag: "🇮🇳",
        name: "manali",
        link: "https://www.google.com/maps/place/manali"
    },
    {
        flag: "🇮🇳",
        name: "chennai",
        link: "https://www.google.com/maps/place/chennai"
    },
    {
        flag: "🇹🇷",
        name: "kayseri",
        link: "https://www.google.com/maps/place/kayseri"
    },
    {
        flag: "🇹🇷",
        name: "istanbul",
        link: "https://www.google.com/maps/place/istanbul"
    },
    {
        flag: "🇮🇳",
        name: "puri",
        link: "https://www.google.com/maps/place/puri"
    },
    {
        flag: "🇮🇳",
        name: "darjeeling",
        link: "https://www.google.com/maps/place/darjeeling"
    },
    {
        flag: "🇮🇳",
        name: "gangtok",
        link: "https://www.google.com/maps/place/gangtok"
    },
    {
        flag: "🇮🇳",
        name: "gaya",
        link: "https://www.google.com/maps/place/gaya"
    },
    {
        flag: "🇮🇳",
        name: "port blair",
        link: "https://www.google.com/maps/place/port+blair"
    },
    {
        flag: "🇮🇳",
        name: "kolkata",
        link: "https://www.google.com/maps/place/kolkata"
    },
    {
        flag: "🇮🇳",
        name: "allahabad",
        link: "https://www.google.com/maps/place/allahabad"
    },
    {
        flag: "🇮🇳",
        name: "rourkela",
        link: "https://www.google.com/maps/place/rourkela"
    },
    {
        flag: "🇮🇳",
        name: "goa",
        link: "https://www.google.com/maps/place/goa"
    },
    {
        flag: "🇮🇳",
        name: "mumbai",
        link: "https://www.google.com/maps/place/mumbai"
    },
    {
        flag: "🇮🇳",
        name: "patna",
        link: "https://www.google.com/maps/place/patna"
    },
    {
        flag: "🇮🇳",
        name: "mussoorie",
        link: "https://www.google.com/maps/place/mussoorie"
    } 
]

const flagCard = (flag: string, name: string, link: string) => (
    <li>
        <Twemoji emoji={flag} /> {" "}
        <Link to={link} className="hover:underline">
            {name}
        </Link>
    </li>
);

export default function PlacesPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">

                <H1 className="pb-6">places</H1>
                <H3>lived in:</H3>
                <List>
                    {placesLived.map((place) => flagCard(place.flag, place.name, place.link))}
                </List>
                <H3>visited:</H3>
                <List>
                    {placesVisited.map((place) => flagCard(place.flag, place.name, place.link))}
                </List>
                <P>fun fact: i have flown 100k+ kms</P>
            </div>
        </div>
    );
}