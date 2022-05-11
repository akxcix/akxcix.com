import React from "react";
import styled from "styled-components";
import Theme from "../../common/Theme";

export const H1 = styled.p`
    font-family: Menlo, Consolas, monospace;
    font-size: 24px;
    font-weight: normal;
    color: ${Theme.dark.primary};
`;

export const P = styled.p`
    font-family: Menlo, Consolas;
    font-size: 12px;
    font-weight: normal;
    color: ${Theme.dark.primary};
`;