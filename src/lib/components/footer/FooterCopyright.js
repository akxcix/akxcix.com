import styled from 'styled-components';

const StyledCopyright = styled.div`
    padding: 5px 10px 0px;
`;

export function FooterCopyright(props) {
    const year = new Date().getUTCFullYear();

    return (
        <StyledCopyright className={props.className}>&copy; {year} Adarsh Kumar</StyledCopyright>
    )
}