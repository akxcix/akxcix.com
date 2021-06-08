import { Switch, Route } from 'react-router-dom';
import { Home } from './home/Home';
import { About } from './about/About';

export function Routes(props) {
    return (
        <div className={props.className}>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}