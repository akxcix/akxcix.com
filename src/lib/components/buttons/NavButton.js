import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
color: ${props => props.theme.onSurfaceHigh};
font-weight: 600;
padding: 10px;
border-radius: 5px;
text-decoration: none;
margin: 5px;
`

export function NavButton(props) {
    return (
        <StyledLink to={props.href}>{props.name}</StyledLink>
    )
}