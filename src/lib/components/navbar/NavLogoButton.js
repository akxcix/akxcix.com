import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogoButton = styled(Link)`
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.onSurfaceHigh};
    font-size: 22px;
    align-items: center;
    font-weight: 700;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    margin: 5px; 
`;

export function LogoButton(props) {
    return (
        <StyledLogoButton
            className={props.className}
            to="/">Adarsh Kumar
        </StyledLogoButton>
    )
}