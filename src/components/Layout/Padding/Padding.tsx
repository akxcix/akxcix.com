import React, { FC } from "react";
import styled from "styled-components";

interface PaddingProps {
    className: string,
    margin: string,
}

const StyledDiv = styled.div<PaddingProps>`
    padding: ${p => p.margin};
`

export const Padding: FC<PaddingProps> = ({className, margin, children}) => {
    return (
        <div className={className}>
            <StyledDiv className={"padding-" + className} margin={margin}>
                {children}
            </StyledDiv>
        </div>
    )
}
