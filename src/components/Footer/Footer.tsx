import { FC } from "react";
import { FOOTER_LINKS } from "../../commons/constants";
import { Button } from "../Buttons/Button";
import { Row } from "../Layout/Container/Container";
import { Padding } from "../Layout/Padding/Padding";

interface FooterProps {
    className: string,
}

const Navbar: FC<FooterProps> = ({className}: FooterProps) => {
    return (
        <div className={className}>
            <Padding className={className} margin="10px">
                <Row>
                    {FOOTER_LINKS.map((x, i) => 
                        <Button className={className+"button-footer-"+x.name} href={x.link} text={x.name}/>
                    )}
                </Row>
            </Padding>
        </div>
    )
}

export default Navbar;