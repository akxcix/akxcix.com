import React, {FC} from "react";
import styled from "styled-components";
import Theme from "../Theme/Theme";
import { Button } from "../Buttons/Button";

const StyledNav = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

interface FooterProps {
    className: string,
}

const Navbar: FC<FooterProps> = ({className}: FooterProps) => {
    return (
        <div className={className}>
            <StyledNav>
                <Button className="button-footer-twitter" href="https://twitter.com/adarshXCIX" text="Twitter"/>
                <Button className="button-footer-github" href="https://github.com/iamadarshk" text="Github"/>
            </StyledNav>
        </div>
    )
}

export default Navbar;