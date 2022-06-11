import React, {FC} from "react";
import styled, {keyframes} from "styled-components";
import Theme from "../../components/Theme/Theme";

const Blink = keyframes`
    0%   { border-bottom-color: ${Theme.dark.secondaryVariant}; }
    50%  { border-bottom-color: ${Theme.dark.secondaryVariant}; }
    51%  { border-bottom-color: transparent; }
    100% { border-bottom-color: transparent; }
`

const StyledHome = styled.div`
    h6 {
        font-family: Menlo, Consolas, monospace;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        transform: translate(-50%, -50%);
        font-size: 16px;
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

const Home: FC<HomeProps> = ({className}: HomeProps) => {
    return (
        <div className={className}>
            <StyledHome>
                <h6><span>{'>'}</span> adarsh<span>kumar<i>.</i>io</span></h6>
            </StyledHome>
        </div>
    )
}

export default Home;