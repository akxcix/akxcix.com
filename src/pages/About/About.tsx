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
                    hey! i am adarsh<br />
                    &gt; a ramblin' wreck in some latent space<br />
                    &gt; prev: @flipkart @askfilo<br />
                    &gt; n&w s4 @_buildspace<br />
                    &gt; TIET '21
                </P>
            </Column>
        </div>
    )
}

export default About;
