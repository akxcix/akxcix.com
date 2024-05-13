import { FC } from "react";
import styled, { keyframes } from "styled-components";
import Theme from "components/Theme/Theme";
import {
    TEXT_SIZE_P,
    FONT_FAMILY_MONO
} from "commons/constants";
import { Helmet } from "react-helmet";

const Blink = keyframes`
    0%   { border-bottom-color: ${Theme.dark.secondaryVariant}; }
    50%  { border-bottom-color: ${Theme.dark.secondaryVariant}; }
    51%  { border-bottom-color: transparent; }
    100% { border-bottom-color: transparent; }
`

const StyledHome = styled.div`
    h6 {
        font-family: ${FONT_FAMILY_MONO};
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        transform: translate(-50%, -50%);
        font-size: ${TEXT_SIZE_P};
        font-weight: normal;
        color: ${Theme.dark.primary};
    }
    h6 span {
        color: ${Theme.dark.secondary};
    }
    h6 i {
        font-style: normal;
        border-bottom: 1px solid ${Theme.dark.secondaryVariant};
        animation: ${Blink} 1s infinite;
    }
`;

interface HomeProps {
    className: string,
}

const Home: FC<HomeProps> = ({ className }: HomeProps) => {
    return (
        <div className={className}>
            <Helmet>
                <title>Adarsh Kumar</title>
            </Helmet>
            <StyledHome>
                <h6><span>{'>'}</span> akxcix<span><i>.</i>com</span></h6>
            </StyledHome>
        </div>
    )
}

export default Home;