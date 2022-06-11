import { FC } from "react";
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
                    <Button className="button-navbar-home" href="https://adarshkumar.io/" text="Home"/>
                    <Button className="button-navbar-blog" href="https://blog.adarshkumar.io" text="Blog"/>
                    <Button className="button-navbar-experience" href="https://adarshkumar.io/experience" text="Experience"/>
                    <Button className="button-navbar-contact" href="https://adarshkumar.io/contact" text="Contact"/>
                </Row>
            </Padding>
        </div>
    )
}

export default Navbar;