import React from "react";
import styled from "styled-components";
import Theme from "../../common/Theme";
import { Button } from "../Buttons/Button";

const StyledNav = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Navbar = () => {
    return (
        <div className="Navbar">
            <StyledNav>
                <Button href="https://twitter.com/adarshXCIX">{'[Twitter]'}</Button>
                <Button href="https://github.com/iamadarshk">{'[Github]'}</Button>
            </StyledNav>
        </div>
    )
}

export default Navbar;