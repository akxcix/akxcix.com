import { FC } from "react";
import { NAV_LINKS } from "../../commons/constants";
import { Button } from "../Buttons/Button";
import { Row } from "../Layout/Container/Container";
import { Padding } from "../Layout/Padding/Padding";

interface NavbarProps {
    className: string,
}

const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    return (
        <div className={className}>
            <Padding className={className} margin="10px">
                <Row>
                    {NAV_LINKS.map((x, i) =>
                        < Button className={"button-navbar-" + x.name} href={x.link} text={x.name} key={i} />
                    )}
                </Row>
            </Padding>
        </div>
    )
}

export default Navbar;