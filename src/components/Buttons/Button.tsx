import react from "react";
import styled from "styled-components";
import Theme from "../../common/Theme";

export const Button = styled.a`
    padding: 5px;
    font-family: Menlo, Consolas, monospace;
    font-size: 12px;
    font-weight: normal;
    color: ${Theme.dark.primary};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;