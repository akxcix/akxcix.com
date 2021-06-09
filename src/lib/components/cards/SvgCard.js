import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { SurfaceH4, SurfaceP } from "../text/SurfaceTexts";
import {SVG_WIDTH, SVG_HEIGHT} from "../../../app/constants";

const CardPadding = styled.div`
    padding: 30px 40px;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.onSurfaceMedium};
    border-radius: 10px;
    width: 200px;
    padding: 5px 10px;
`;

const StyledSvg = styled(SVG)`
    padding: 10px;
    text-align: center;
    --primary: ${props => props.theme.primary};
    --primary-variant: ${props => props.theme.primaryVariant}
`;

export const SvgCard = (props) => {
    return (
        <CardPadding className={props.className}>
            <StyledCard>
                <StyledSvg 
                    src={props.image}  
                    description={props.imageDesc}
                    width={SVG_WIDTH}
                    height={SVG_HEIGHT}
                />
                <SurfaceH4 text={props.heading} />
                <SurfaceP text={props.details} />
            </StyledCard>
        </CardPadding>
    )
}