import React from 'react';
import styled from 'styled-components';
import Theme from "../../common/Theme";

const StyledFooter = styled.div`
    display: flex;
`

const Footer = () => {
    return (
        <div className="Footer">
            <StyledFooter>
                <a href="https://github.com/iamadarshk">Github</a>
                <a href="https://twitter.com/adarshXCIX">Twitter</a>
            </StyledFooter>
        </div>
    )
}

export default Footer;
