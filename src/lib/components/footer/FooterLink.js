import styled from 'styled-components';
import {FontAwesomeIcon} from '../thirdParty/fontAwesome/FontAwesomeIcon';

const StyledLink = styled.a`
    padding: 5px;
    color: ${props => props.theme.secondary};
`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
`;

export function FooterLink(props) {
    return (
    <StyledLink className={props.className} href={props.href}>
        <StyledIcon className={props.icon}/>
    </StyledLink>)
}