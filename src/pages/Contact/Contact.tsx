import { FC } from "react";
import { CONTACT_EMAIL } from "../../commons/constants";
import { H1, P } from "../../components/Typography/Titles";
import { Column } from "../../components/Layout/Container/Container";
import { Button } from "../../components/Buttons/Button";

interface ContactProps {
    className: string,
}

const Contact: FC<ContactProps> = ({className}: ContactProps) => {
    return (
        <div className={className}>
            <Column className={"column" + className}>
                <H1>
                    Contact
                </H1>
                <br/>
                <P>
                    email: <Button className={"button-email"+className} href={"mailto:" + CONTACT_EMAIL} text={CONTACT_EMAIL}/>
                </P>
            </Column>
        </div>
    )
}

export default Contact;