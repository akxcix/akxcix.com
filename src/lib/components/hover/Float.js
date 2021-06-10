import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;

    &:hover {
		-webkit-transform: translateY(-8px);
		transform: translateY(-8px);    
    }

    &:active {
		-webkit-transform: translateY(-8px);
		transform: translateY(-8px);  
    }
`;

export const Float = (props) => {
    return (
        <StyledDiv className={props.className}>
        </StyledDiv>
    )
}