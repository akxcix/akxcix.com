import { FC } from "react";
import { LINK_CALCOM, TWITTER_DM } from "../../commons/constants";
import { H1, P } from "../../components/Typography/Titles";
import { Column } from "../../components/Layout/Container/Container";
import { Button } from "../../components/Buttons/Button";
import { Helmet } from "react-helmet";

interface ContactProps {
  className: string;
}

const Contact: FC<ContactProps> = ({ className }: ContactProps) => {
  return (
    <div className={className}>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Column className={"column" + className}>
        <H1>Contact</H1>
        <br />
        <P>
          <Button
            className={"button-twitter" + className}
            href={TWITTER_DM}
            text="twitter dm"
          />
        </P>
        <P>
          <Button
            className={"button-calcom" + className}
            href={LINK_CALCOM}
            text="cal.com"
          />
        </P>
      </Column>
    </div>
  );
};

export default Contact;
