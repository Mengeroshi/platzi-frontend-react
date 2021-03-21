
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './Layout'
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFund from '../pages/NotFund';
import BadgeHome from '../pages/BadgeHome';
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path= "/" component={BadgeHome}/>
                    <Route exact path= "/badges" component={Badges}/>
                    <Route exact path= "/badges/new" component={BadgeNew}/>
                    <Route exact path= "/badges/:badgeId" component={BadgeDetailsContainer}/>
                    <Route exact path= "/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route component={NotFund}/>
                   
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
export default App;