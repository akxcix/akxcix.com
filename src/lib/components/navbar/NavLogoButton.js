import styled from 'styled-components';

const StyledLogoButton = styled.a`
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.onSurfaceHigh};
    font-size: 22px;
    align-items: center;
    font-weight: 600;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    margin: 5px;
`;

export function LogoButton(props) {
    return (
        <StyledLogoButton
            className={props.className}
            href="/">Adarsh Kumar
        </StyledLogoButton>
    )
}