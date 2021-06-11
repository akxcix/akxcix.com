import styled from "styled-components";

export const BackgroundLink = styled.a`
    padding: 2px;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    border-radius: 5px;
    text-decoration: none;

    &:visited {
        color: ${props => props.theme.primaryVariant};
    }

    &:hover {
        background-color: ${props => props.theme.onBackgroundHigh};
        color: ${props => props.theme.background};
    }
`;