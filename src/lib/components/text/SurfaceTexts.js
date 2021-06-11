import styled from "styled-components"

const StyledDivHigh = styled.div`
    color: ${props => props.theme.onSurfaceHigh};
`;

export const SurfaceH1 = (props) => {
    return (
        <div className={props.className}>
            <StyledDivHigh>
                <h1>
                    {props.children}
                </h1>
            </StyledDivHigh>
        </div>
    )
}

export const SurfaceH2 = (props) => {
    return (
        <div className={props.className}>
            <StyledDivHigh>
                <h2>
                    {props.children}
                </h2>
            </StyledDivHigh>
        </div>
    )
}

export const SurfaceH3 = (props) => {
    return (
        <div className={props.className}>
            <StyledDivHigh>
                <h3>
                    {props.children}
                </h3>
            </StyledDivHigh>
        </div>
    )
}
export const SurfaceH4 = (props) => {
    return (
        <div className={props.className}>
            <StyledDivHigh>
                <h4>
                    {props.children}
                </h4>
            </StyledDivHigh>
        </div>
    )
}

export const SurfaceH5 = (props) => {
    return (
        <div className={props.className}>
            <StyledDivHigh>
                <h5>
                    {props.children}
                </h5>
            </StyledDivHigh>
        </div>
    )
}

export const SurfaceP = (props) => {
    return (
        <div className={props.className}>
            <StyledDivHigh>
                <p>
                    {props.children}
                </p>
            </StyledDivHigh>
        </div>
    )
}