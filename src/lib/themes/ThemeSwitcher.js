import styled, { useTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { increment } from "./activeThemeSlice";

const StyledIcon = styled.i`
    color: ${props => props.theme.onSurfaceHigh};
    font-size: 25px;
    border-radius: 25px;
    padding: 10px;

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
`;

export const ThemeSwitcher = (props) => {
    const dispatch = useDispatch();

    const theme = useTheme();

    const toggleTheme = () => {
        dispatch(increment())
    }

    return (
        <div className={props.className}>
            <StyledIcon
                className={theme.icon}
                onClick={toggleTheme}
            />
        </div>
    )
}