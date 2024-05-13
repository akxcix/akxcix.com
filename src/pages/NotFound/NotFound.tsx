import { FC } from "react";
import styled from "styled-components";
import { NOT_FOUND_GIFS } from "commons/constants";
import { H1, P } from "components/Typography/Titles";
import { Button } from "components/Buttons/Button";
import {Helmet} from "react-helmet";

const StyledCenteredDiv = styled.div`
    text-align: center;
    color: ${props => props.theme.onBackgroundHigh};
    background-color: ${props => props.theme.background};
`;

const StyledImg = styled.img`
    width: min(500px, 100%);
    height: auto;
`;

interface NotFoundProps {
    className: string,
}

const NotFound: FC<NotFoundProps> = ({className}: NotFoundProps) => {
    const randomGif = NOT_FOUND_GIFS[Math.floor(Math.random() * NOT_FOUND_GIFS.length)];

    return (
        <div className={className}>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <StyledCenteredDiv>
                <H1>404 - Not Found</H1>
                <StyledImg src={randomGif.src} alt={randomGif.alt} />
                <P>via <Button className="giphy-button" href="https://giphy.com" text="GIPHY"/></P>
            </StyledCenteredDiv>
        </div>
    )
}

export default NotFound;