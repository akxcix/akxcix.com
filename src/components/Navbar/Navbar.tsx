import { FC } from "react";
import { NAVLINKS } from "../../commons/constants";
import { Button } from "../Buttons/Button";
import { Row } from "../Layout/Container/Container";
import { Padding } from "../Layout/Padding/Padding";

interface NavbarProps {
    className: string,
}

const Navbar: FC<NavbarProps> = ({className}: NavbarProps) => {
    return (
        <div className={className}>
            <Padding className={className} margin="10px">
                <Row>
                    {NAVLINKS.map((x, i) => 
                        <Button className={"button-navbar-"+x.name} href={x.link} text={x.name}/>
                    )}
                </Row>
            </Padding>
        </div>
    )
}

export default Navbar;