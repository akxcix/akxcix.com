import { Switch, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { About } from './about/About';
import {NotFound} from './errors/NotFound';

export function Routes(props) {
    return (
        <div className={props.className}>
            <Switch>
                <Route path="/about"><About /></Route>
                <Route exact path="/"><Home /></Route>
                <Route><NotFound /></Route>
            </Switch>
        </div>
    )
}