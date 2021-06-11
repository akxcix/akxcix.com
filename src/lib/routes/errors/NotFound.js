import styled from "styled-components";
import { BackgroundH1, BackgroundH5 } from "../../components/text/BackgroundTexts";
import { Helmet } from "react-helmet";
import {BackgroundLink} from "../../components/buttons/LinkButton"

const StyledCenteredDiv = styled.div`
    text-align: center;
    color: ${props => props.theme.onBackgroundHigh};
    background-color: ${props => props.theme.background};
`;

const StyledImg = styled.img`
    width: min(500px, 100%);
    height: auto;
`;

const gifs = [
    {
        src: "https://i.giphy.com/media/hEc4k5pN17GZq/giphy.webp",
        alt: "confused travolta"
    },
    {
        src: "https://i.giphy.com/media/c20UV66B7zCWA/giphy.webp",
        alt: "confused superman"
    },
    {
        src: "https://i.giphy.com/media/1oJLpejP9jEvWQlZj4/giphy.webp",
        alt: "visible confusion"
    },
    {
        src: "https://i.giphy.com/media/O5BnWhNArl5VwmL3Nu/giphy.webp",
        alt: "confused fallon"
    },
    {
        src: "https://i.giphy.com/media/gKsJUddjnpPG0/giphy.webp",
        alt: "confused ryan reynolds"
    },
    {
        src: "https://i.giphy.com/media/l4Epf0KwYUQY5DcGc/giphy.webp",
        alt: "confused direction pointing"
    },
    {
        src: "https://i.giphy.com/media/gHPn1MdH7PVH3uBUqY/giphy.webp",
        alt: "confused dude"
    },
];

export function NotFound(props) {
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    return (
        <div className={props.className}>
            <Helmet>
                <title>
                    Not Found
                </title>
            </Helmet>
            <StyledCenteredDiv>
                <BackgroundH1>404 - Not Found</BackgroundH1>
                <StyledImg src={randomGif.src} alt={randomGif.alt} />
                <BackgroundH5>via <BackgroundLink href="https://giphy.com">GIPHY</BackgroundLink></BackgroundH5>
            </StyledCenteredDiv>
        </div>

    )
}