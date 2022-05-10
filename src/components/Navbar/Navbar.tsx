import React from "react";
import styled from "styled-components";
import Theme from "../../common/Theme";

const StyledNav = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    a {
        padding: 5px;
        font-family: Menlo, Consolas, monospace;
        font-size: 12px;
        font-weight: normal;
        color: ${Theme.dark.primary};
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const Navbar = () => {
    return (
        <div className="Navbar">
            <StyledNav>
                <a href="https://blog.adarshkumar.io">{'[Blog]'}</a>
                <a href="https://adarshkumar.io/experience">{'[Experience]'}</a>
                <a href="https://adarshkumar.io/contact">{'[Contact]'}</a>
            </StyledNav>
        </div>
    )
}

export default Navbar;