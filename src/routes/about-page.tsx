import { H1, InlineCode, Muted, P } from "@/components/ui/typography";
import { Link } from "react-router-dom";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">

                <H1>about</H1>
                <P>
                    {"hey there!"}
                </P>
                <P>
                    {"i am adarsh and usually go online as "}
                    <InlineCode>akxcix</InlineCode>
                    {". sometimes i have been asked what it means. it is nothing fancy, just my initials and the roman numeral for 99."}
                </P>
                <P>
                    {"i am a software engineer. i worked at filo"}
                    <Link to="https://www.linkedin.com/company/filoedtech/" className="hover:underline">
                        <Muted>{"[1]"}</Muted>
                    </Link>
                    {" for a while before moving to flipkart"}
                    <Link to="https://www.linkedin.com/company/flipkart/" className="hover:underline">
                        <Muted>{"[2]"}</Muted>
                    </Link>
                    {" where i worked until i decided to take a break and get back to studying."}
                </P>
                <P>
                    {"somewhere in between i also participated in a program called nights and weekends by buildspace"}
                    <Link to="https://buildspace.so/" className="hover:underline">
                        <Muted>{"[3]"}</Muted>
                    </Link>
                    {". for season 4, i built a project called wanderfusion"}
                    <Link to="https://wanderfusion.com/" className="hover:underline">
                        <Muted>{"[4]"}</Muted>
                    </Link>
                    {" which was a travel planning app that i later decided to shut down because i realised it was a classic tarpit idea"}
                    <Link to="https://www.ycombinator.com/library/Ij-avoid-these-tempting-startup-tarpit-ideas#:~:text=What%20is%20a%20%E2%80%9Ctarpit%20idea,and%20over%20again." className="hover:underline">
                        <Muted>{"[5]"}</Muted>
                    </Link>
                </P>
                <P>
                    {"right now i am working towards my masters in computer science at georgia tech"}
                    <Link to="https://www.cc.gatech.edu/" className="hover:underline">
                        <Muted>{"[6]"}</Muted>
                    </Link>
                    {". i previously studied computer engineering at thapar university"}
                    <Link to="https://csed.thapar.edu/" className="hover:underline">
                        <Muted>{"[7]"}</Muted>
                    </Link>
                    {"."}
                </P>
                <P>
                    {"i am currently based in atlanta, but i have previously lived in few other places"}
                    <Link to={"/places"} className="hover:underline">
                        <Muted>{"[8]"}</Muted>
                    </Link>
                    {" as well."}
                </P>
            </div>
        </div>
    );
}