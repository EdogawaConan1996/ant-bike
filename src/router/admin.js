import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import AdminPage from "../pages/admin";
import HomePage from "../pages/home";
import UiButtonsPage from "../pages/ui/buttons";
import Error404Page from "../pages/error/404";
import UiModalPage from "../pages/ui/modals";
import RichPage from "../pages/rich";
import UiLoadingPage from "../pages/ui/loading";
import UiNotificationPage from "../pages/ui/notification";
import UiMessagePage from "../pages/ui/message";
import UiTabsPage from "../pages/ui/tabs";

class AdminRouter extends React.Component {

  render() {
    return (
      <AdminPage>
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/ui/buttons' component={UiButtonsPage} />
          <Route exact path='/ui/modals' component={UiModalPage} />
          <Route exact path='/ui/loadings' component={UiLoadingPage} />
          <Route exact path='/ui/notification' component={UiNotificationPage} />
          <Route exact path='/ui/messages' component={UiMessagePage} />
          <Route exact path='/ui/tabs' component={UiTabsPage} />
          <Route exact path='/rich' component={RichPage} />
          <Route component={Error404Page} />
          <Redirect to='/home'/>
        </Switch>
      </AdminPage>
    );
  }
}

export default AdminRouter;
