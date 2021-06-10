import styled from "styled-components";
import { BackgroundH3, BackgroundH5 } from "../../components/text/BackgroundTexts";
import { Helmet } from "react-helmet";

const StyledCenteredDiv = styled.div`
    text-align: center;
    color: ${props => props.theme.onBackgroundHigh};
    background-color: ${props => props.theme.background};
`;

const StyledImg = styled.img`
padding: 30px;
width: 400px;
height: auto;
`;

const gifs = [
    "https://i.giphy.com/media/hEc4k5pN17GZq/giphy.webp", 
    "https://i.giphy.com/media/c20UV66B7zCWA/giphy.webp",
    "https://i.giphy.com/media/1oJLpejP9jEvWQlZj4/giphy.webp",
    "https://i.giphy.com/media/O5BnWhNArl5VwmL3Nu/giphy.webp",
    "https://i.giphy.com/media/gKsJUddjnpPG0/giphy.webp",
    "https://i.giphy.com/media/l4Epf0KwYUQY5DcGc/giphy.webp",
    "https://i.giphy.com/media/gHPn1MdH7PVH3uBUqY/giphy.webp",
];

export function NotFound(props) {
    const randomGif = Math.floor(Math.random() * gifs.length);

    return (
        <div className={props.className}>
            <Helmet>
                <title>
                    404
                </title>
            </Helmet>
            <StyledCenteredDiv>
                <StyledImg src={gifs[randomGif]}/>
                <BackgroundH3 text="Ah yes, a broken link"/>
                <BackgroundH5 text="(The link you follwed does not exist, or is no longer available)" />
            </StyledCenteredDiv>
        </div>

    )
}