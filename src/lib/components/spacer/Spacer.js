import styled from 'styled-components';

const StyledSpacer = styled.div`
    display: flex;
    flex-grow: 1;
`

export function Spacer(props) {
    return (
        <StyledSpacer className={props.className} /> 
    )
}