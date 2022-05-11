import React from "react";
import styled from "styled-components";
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
                <Button href="https://adarshkumar.io/">{'[Home]'}</Button>
                <Button href="https://blog.adarshkumar.io">{'[Blog]'}</Button>
                <Button href="https://adarshkumar.io/experience">{'[Experience]'}</Button>
                <Button href="https://adarshkumar.io/contact">{'[Contact]'}</Button>
            </StyledNav>
        </div>
    )
}

export default Navbar;