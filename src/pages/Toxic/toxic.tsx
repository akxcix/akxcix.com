import { FC } from "react";
import { CONTACT_EMAIL } from "../../commons/constants";
import { H1, P } from "../../components/Typography/Titles";
import { Column } from "../../components/Layout/Container/Container";
import { Button } from "../../components/Buttons/Button";
import { Helmet } from "react-helmet";

interface ToxicProps {
    className: string,
}

const Toxic: FC<ToxicProps> = ({ className }: ToxicProps) => {
    return (
        <div className={className}>
            <Helmet>
                <title>Toxic</title>
            </Helmet>
            <Column className={"column" + className}>
                {/* <H1>
                    Toxic
                </H1> */}
                <br />
                <P>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    >
                    </iframe>
                </P>
            </Column>
        </div>
    )
}

export default Toxic;