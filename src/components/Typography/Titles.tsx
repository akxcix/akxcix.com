import styled from "styled-components";
import Theme from "components/Theme/Theme";
import {
    FONT_FAMILY_MONO,
    FONT_FAMILY,
    TEXT_SIZE_H1,
    TEXT_SIZE_P
} from "../../commons/constants";

export const H1 = styled.p`
    font-family: ${FONT_FAMILY_MONO};
    font-size: ${TEXT_SIZE_H1};
    font-weight: normal;
    color: ${Theme.dark.primary};
`;

export const P = styled.p`
    font-family: ${FONT_FAMILY};
    font-size: ${TEXT_SIZE_P};
    font-weight: normal;
    color: ${Theme.dark.primary};
    max-width: 800px; /* Change the value as per your requirement */
    margin: 0 auto;
`;