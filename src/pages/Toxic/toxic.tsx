import { FC } from "react";
import { P } from "../../components/Typography/Titles";
import { Column } from "../../components/Layout/Container/Container";
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
                <br />
                <P>
                    <iframe
                        height="100%"
                        width="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        frameBorder="0"
                    >
                    </iframe>
                </P>
            </Column>
        </div>
    )
}

export default Toxic;