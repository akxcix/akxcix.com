import { FooterLink } from './FooterLink';
import { FooterCopyright } from './FooterCopyright';
import styled from 'styled-components';

const StyledFooter = styled.div`
    padding: 10px;
    text-align: center;
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.onSurfaceMedium};
`

export function Footer(props) {
    return (
        <StyledFooter className={props.className}>
            <div className="footer-icons">
                <FooterLink
                    href="https://www.github.com/iamadarshk"
                    icon="fab fa-github"
                />
                <FooterLink
                    href="https://twitter.com/_iamadarshk"
                    icon="fab fa-twitter"
                />
                <FooterLink
                    href="https://instagram.com/_iamadarshk"
                    icon="fab fa-instagram"
                />
                <FooterLink
                    href="https://linkedin.com/in/iamadarshk"
                    icon="fab fa-linkedin"
                />
                <FooterLink
                    href="https://dev.to/iamadarshk"
                    icon="fab fa-dev"
                />
                <FooterLink
                    href="https://twitch.tv/iamadarshk"
                    icon="fab fa-twitch"
                />
                <FooterLink
                    href="https://steamcommunity.com/id/iamadarshk"
                    icon="fab fa-steam"
                />
                
            </div>
            <FooterCopyright />
        </StyledFooter>
    )
}