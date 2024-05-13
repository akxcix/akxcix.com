import { FC } from "react";
import { H1, P } from "components/Typography/Titles";
import { Column, ColumnLeftAligned } from "components/Layout/Container/Container";
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
                <ColumnLeftAligned>
                    <P>
                        hey! i am adarsh, but you can also call me "ak"
                        <br />
                        <br />
                        my twitter bio pretty much sums me up:
                        <ul>
                            <li>a ramblin' wreck in some latent space</li>
                            <li>prev: @flipkart @askfilo</li>
                            <li>n&w s4 @_buildspace</li>
                            <li>TIET '21</li>
                            <li>🇮🇳</li>
                        </ul>
                        if you're curious to know more or just want to stalk me (lol), check <br />
                        out the social media links in the footer
                    </P>
                </ColumnLeftAligned>
                
            </Column>
        </div>
    )
}

export default About;
