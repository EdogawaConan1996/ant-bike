import React from "react";
import { Route, Switch, HashRouter} from "react-router-dom";
import AdminRouter from './admin';
import App from "../App";
import LoginPage from "../pages/login";

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/' render={() => <AdminRouter />} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default Router;
