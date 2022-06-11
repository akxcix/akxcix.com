import { FC } from "react";
import styled from "styled-components";
import { Button } from "../Buttons/Button";
import { Padding } from "../Layout/Padding/Padding";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

interface FooterProps {
    className: string,
}

const Navbar: FC<FooterProps> = ({className}: FooterProps) => {
    return (
        <div className={className}>
            <Padding className={className} margin="10px">
                <StyledDiv>
                    <Button className="button-footer-twitter" href="https://twitter.com/adarshXCIX" text="Twitter"/>
                    <Button className="button-footer-github" href="https://github.com/iamadarshk" text="Github"/>
                </StyledDiv>
            </Padding>
        </div>
    )
}

export default Navbar;