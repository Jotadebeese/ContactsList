import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SingleContact from './pages/[slug]';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <SingleContact />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}