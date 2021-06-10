import styled from 'styled-components';
import {Float} from '../hover/Float';

const StyledLink = styled.a`
    padding: 5px;
    color: ${props => props.theme.secondary};
`;

const StyledIcon = styled(Float)`
    font-size: 30px;
`;

export function FooterLink(props) {
    return (
        <StyledLink className={props.className} href={props.href} aria-label={props.label}>
            <StyledIcon className={props.icon} />
        </StyledLink>)
}