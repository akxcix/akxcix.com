import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: ${props => props.theme.onSurfaceHigh};
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    border-width: 2px;
    border-color: ${props => props.theme.onSurfaceHigh};
    margin: 5px;

    /* Fade */
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;

    &:hover,
    &:focus,
    &:active {
        background-color: ${props => props.theme.onSurfaceHigh};
        color: ${props => props.theme.surface};
    }
`

export function NavButton(props) {
    return (
        <StyledLink to={props.href}>{props.name}</StyledLink>
    )
}