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
                    label="GitHub"
                />
                <FooterLink
                    href="https://twitter.com/adarshxcix"
                    icon="fab fa-twitter"
                    label="Twitter"
                />
                <FooterLink
                    href="https://www.instagram.com/adarshkumar.99/"
                    icon="fab fa-instagram"
                    label="Instagram"
                />
                <FooterLink
                    href="https://linkedin.com/in/iamadarshk"
                    icon="fab fa-linkedin"
                    label="LinkedIn"
                />
                <FooterLink
                    href="https://dev.to/iamadarshk"
                    icon="fab fa-dev"
                    label="Dev"
                />
                {/* <FooterLink
                    href="https://twitch.tv/iamadarshk"
                    icon="fab fa-twitch"
                    label="Twitch"
                />
                <FooterLink
                    href="https://steamcommunity.com/id/iamadarshk"
                    icon="fab fa-steam"
                    label="Steam"
                /> */}
                
            </div>
            <FooterCopyright />
        </StyledFooter>
    )
}