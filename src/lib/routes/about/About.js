import { fetchAboutPageData } from "./controller";
import { BackgroundH1, BackgroundH2 } from "../../components/text/BackgroundTexts";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { SvgCard } from "../../components/cards/SvgCard";

const StyledJustifiedDiv = styled.div`
    text-align: justify;
    color: ${props => props.theme.onBackgroundHigh};
    background-color: ${props => props.theme.background};
`;

const CardsFlexbox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
`;

export function About(props) {
    const [title, about, languages, frameworks] = fetchAboutPageData();

    return (
        <div className={props.className}>
            <Helmet>
                <title>
                    {title}
                </title>
            </Helmet>
            <StyledJustifiedDiv>
                <BackgroundH1 text="About" />
                <BackgroundH2 text={about} />
                <br />

                <BackgroundH1 text="Skills" />

                <BackgroundH2 text="Languages" />
                <CardsFlexbox>
                    {languages.map(language =>
                        <SvgCard
                            image={language.image}
                            imageDesc={language.imageDesc}
                            heading={language.heading}
                            details={language.details}
                        />
                    )}
                </CardsFlexbox>

                <BackgroundH2 text="Frameworks" />
                <CardsFlexbox>
                    {frameworks.map(framework =>
                        <SvgCard
                            image={framework.image}
                            imageDesc={framework.imageDesc}
                            heading={framework.heading}
                            details={framework.details}
                        />
                    )}
                </CardsFlexbox>
            </StyledJustifiedDiv>
        </div>
    )
}