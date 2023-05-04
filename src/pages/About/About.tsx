import { FC } from "react";
import { H1, P } from "../../components/Typography/Titles";
import { Column } from "../../components/Layout/Container/Container";
import { Helmet } from "react-helmet";

interface AboutProps {
    className: string,
}

const About: FC<AboutProps> = ({ className }: AboutProps) => {
    return (
        <div className={className}>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Column className={"column" + className}>
                <H1>
                    About
                </H1>
                <br />
                <P>
                    hey! i am adarsh
                    <br />
                    i don't really know why i created this site, but i am bored so might as well
                    get it over with. i am a software engineer currently working at flipkart. apart
                    from the work stuff i occasionally like to play with dogs, follow startups
                    rant on twitter and click photographs. if you are interested in those, you
                    would find the links in the footer
                </P>
            </Column>
        </div>
    )
}

export default About;