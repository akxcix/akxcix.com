import styled from "styled-components";
import { fetchHomePageData } from "./controller";
import { BackgroundH1, BackgroundH2 } from "../../components/text/BackgroundTexts";
import { Helmet } from "react-helmet";

const StyledCenteredDiv = styled.div`
    text-align: center;
    color: ${props => props.theme.onBackgroundHigh};
    background-color: ${props => props.theme.background};
`;

export function Home(props) {
    const [title, welcomeText, introText] = fetchHomePageData();

    return (
        <div className={props.className}>
            <Helmet>
                <title>
                    {title}
                </title>
            </Helmet>
            <StyledCenteredDiv>
                <BackgroundH1>{welcomeText}</BackgroundH1>
                <BackgroundH2>{introText}</BackgroundH2>
            </StyledCenteredDiv>
        </div>

    )
}