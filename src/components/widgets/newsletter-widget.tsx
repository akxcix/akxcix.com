import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface NewsletterWidgetProps {
    title: string;
    description: string;
    content: string;
    link: string;
    buttonText: string;
}

function NewsletterWidget({ title, description, content, link, buttonText }: NewsletterWidgetProps) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {content}
                </CardContent>
                <CardFooter>
                    <Link to={link}><Button>{buttonText}</Button></Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default NewsletterWidget;
