import { FC } from "react";
import { FOOTER_LINKS } from "commons/constants";
import { Button } from "components/Buttons/Button";
import { Row } from "components/Layout/Container/Container";
import { Padding } from "components/Layout/Padding/Padding";

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