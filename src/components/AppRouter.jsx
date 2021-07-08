import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/loginPage/login.component";
import HomePage from "../pages/homePage.component";
// import SettingsPage from "../pages/settingsPage.component";
import ProfilePage from "../pages/profilePage.component";
import PageNotFound from "../pages/pageNotFound.component";

const AppRouter = () => {
  // const [user] = useState(userContext)
  const [isLoggedIn, setLoggedIn] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };
  const onClick = () => {
    setLoggedIn(false);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          !isLoggedIn ? (
            <Login onSubmit={onSubmit} />
          ) : (
            <Redirect to={`/home`} />
          )
        }
      />
      <Route
        exact
        path="/home"
        render={() =>
          !isLoggedIn ? <Redirect to={`/`} /> : <HomePage onClick={onClick} />
        }
      />
      {/* <Route
        exact
        path="/settings"
        render={() =>
          !isLoggedIn ? (
            <Redirect to={`/`} />
          ) : (
            <SettingsPage onClick={onClick} />
          )
        }
      /> */}
      <Route
        exact
        path="/profile"
        render={() =>
          !isLoggedIn ? (
            <Redirect to={`/`} />
          ) : (
            <ProfilePage onClick={onClick} />
          )
        }
      />
      <Route
        exact
        render={() =>
          !isLoggedIn ? (
            <Redirect to={`/`} />
          ) : (
            <PageNotFound onClick={onClick} />
          )
        }
      />
    </Switch>
  );
};

export default AppRouter;
