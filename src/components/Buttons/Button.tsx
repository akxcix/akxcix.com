import {FC} from "react";
import styled from "styled-components";
import { Padding } from "../Layout/Padding/Padding";
import Theme from "../Theme/Theme";

const StyledA = styled.a`
    padding: 5px;
    font-family: Menlo, Consolas, monospace;
    font-size: 16px;
    font-weight: normal;
    color: ${Theme.dark.primary};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

interface ButtonProps {
    className: string,
    href: string,
    text: string,
}

export const Button: FC<ButtonProps> = ({className, href, text}: ButtonProps) => {
    return (
        <div className={className}>
            <Padding className={"a-" + className} margin="5px">
                <StyledA href={href}>{"[" + text + "]"}</StyledA>
            </Padding>
        </div>
    )
}