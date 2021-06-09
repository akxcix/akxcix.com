import styled from 'styled-components';
import { LogoButton } from './NavLogoButton';
import { NavButton } from '../buttons/NavButton';
import { Spacer } from '../utils/Spacer';
import {ThemeSwitcher} from "../../themes/ThemeSwitcher";

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

export function Navbar(props) {
    return (
        <StyledNav className={props.className}>
            <LogoButton />
            <Spacer />
            <NavButton href="/" name="Home" />
            <NavButton href="/about" name="About" />
            <ThemeSwitcher />
        </StyledNav>
    )
}