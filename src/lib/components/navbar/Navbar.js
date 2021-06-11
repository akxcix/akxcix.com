import styled from 'styled-components';
import { LogoButton } from './NavLogoButton';
import { NavButton } from '../buttons/NavButton';
import { Spacer } from '../utils/Spacer';
import { ThemeSwitcher } from "../../themes/ThemeSwitcher";
import { Burger } from "./Burger";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.theme.surface};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
`;

const StyledMainNav = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const StyledBurger = styled(Burger)`
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

const routes = [
    {
        href: "/",
        name: "Home",
    },
    {
        href: "/about",
        name: "About",
    },
    {
        href: "/resume",
        name: "Resume",
    },
    {
        href: "/projects",
        name: "Projects",
    },
    {
        href: "/contact",
        name: "Contact",
    },
]

export function Navbar(props) {
    return (
        <div className={props.className}>
            <StyledNav>
                <LogoButton />
                <Spacer />
                <StyledMainNav>
                    {
                        routes.map(route =>
                            <NavButton key={route.href} href={route.href} name={route.name} />
                        )
                    }
                </StyledMainNav>
                <ThemeSwitcher />
                <StyledBurger routes={routes} />
            </StyledNav>
        </div>

    )
}