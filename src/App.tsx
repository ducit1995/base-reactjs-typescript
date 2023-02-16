import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HomePageDashBoardContainer } from './_containers/DashBoard/HomePage';
import { LoginContainer } from './_containers/Auth/Login';
import { BusinessContainer } from './_containers/DashBoard/Business';
import { InboxContainer } from './_containers/DashBoard/Inbox';
import { MessageContainer } from './_containers/DashBoard/Message';
import { ContactContainer } from './_containers/DashBoard/Contact';
import { TeamContainer } from './_containers/DashBoard/Team';
import { NumberContainer } from './_containers/DashBoard/Number';
import { UserContainer } from './_containers/DashBoard/User';
import { RouteRedirectToLogin, RouteRedirectToDashBoard } from './_components/Router';
import { history } from './_helpers';
import './index.css';
import { IAuthenticationData } from './_reducers/Authentication/types';

function App() {
  const authentication: IAuthenticationData = useSelector((state: any) => state.authentication);
  return (
    <div className="screens-xl relative">
      <div className="loading hide" id="loading">
        <div className="loader"></div>
      </div>
      <Router history={history}>
        <Switch>
          <RouteRedirectToDashBoard path='/' exact={true} component={LoginContainer} authentication={authentication} />
          <Route path={'/dashboard/:path?'} >
            <Switch>
              <RouteRedirectToLogin path='/dashboard' exact={true} component={HomePageDashBoardContainer} authentication={authentication} />
              <RouteRedirectToLogin path='/dashboard/business' exact={true} component={BusinessContainer} authentication={authentication} />
              <RouteRedirectToLogin path='/dashboard/inbox' exact={true} component={InboxContainer} authentication={authentication} />
              <RouteRedirectToLogin path='/dashboard/message' exact={true} component={MessageContainer} authentication={authentication} />
              <RouteRedirectToLogin path='/dashboard/contact' exact={true} component={ContactContainer} authentication={authentication} />
              <RouteRedirectToLogin path='/dashboard/team' exact={true} component={TeamContainer} authentication={authentication} />
              <RouteRedirectToLogin path='/dashboard/number' exact={true} component={NumberContainer} authentication={authentication} />
              <RouteRedirectToLogin path='/dashboard/user' exact={true} component={UserContainer} authentication={authentication} />
              <Redirect exact={true} from="*" to="/dashboard" />
            </Switch>
          </Route>
          <Redirect exact={true} from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
