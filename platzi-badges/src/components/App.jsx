
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './Layout'
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFund from '../pages/NotFund';
import BadgeHome from '../pages/BadgeHome';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path= "/" component={BadgeHome}/>
                    <Route exact path= "/badges" component={Badges}/>
                    <Route exact path= "/badges/new" component={BadgeNew}/>
                    <Route component={NotFund}/>
                   
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
export default App;