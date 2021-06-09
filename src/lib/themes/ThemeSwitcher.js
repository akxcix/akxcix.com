import styled, { useTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { increment } from "./activeThemeSlice";

const StyledIcon = styled.i`
    color: ${props => props.theme.onSurfaceHigh};
    font-size: 25px;
    border-radius: 25px;
    padding: 10px;
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