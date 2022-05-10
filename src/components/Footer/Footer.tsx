import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
    display: flex;

`

const Footer = () => {
    return (
        <div className="Footer">
            <StyledNavbar>
                <a href="https://github.com/iamadarshk"><i className="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/adarshXCIX"><i className="fa-brands fa-twitter"></i></a>
            </StyledNavbar>
        </div>
    )
}

export default Footer;
