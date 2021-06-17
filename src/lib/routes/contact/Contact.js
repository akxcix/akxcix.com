import styled from "styled-components";
import { BackgroundH1, BackgroundH2 } from "../../components/text/BackgroundTexts";
import { BackgroundLink } from "../../components/buttons/LinkButton";

const StyledCenteredDiv = styled.div`
    text-align: center;
    color: ${props => props.theme.onBackgroundHigh};
    background-color: ${props => props.theme.background};
`;

export const Contact = (props) => {
    const email = "contact@iamadarshk.com"

    return (
        <StyledCenteredDiv className={props.className}>
            <BackgroundH1>
                Contact
            </BackgroundH1>
            <br/>
            <BackgroundH2>
                email: <BackgroundLink href={"mailto:" + email}>{email}</BackgroundLink>
            </BackgroundH2>
        </StyledCenteredDiv>
    )
}