import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAxios } from "../constants";
import { StateContext } from "../state";
import ProtectedRoute from "./ProtectedRoute";

const requestOptions: any = {
  method: "get",
  isAuthenticated: false,
  endpoint: "/todos",
};
function Home() {
  const { processRequest, loading, data }: any = useAxios();
  const errorHandler = () => alert("An error occured while fetching data");
  const successHandler = () => {};
  useEffect(() => {
    processRequest({
      ...requestOptions,
      errorHandler: errorHandler,
      successHandler: successHandler,
    });
  }, []);
  useEffect(() => {}, [data]);
  return (
    <div>
      <p>HomeComponent</p>
      {loading ? (
        <p>Fetching data...</p>
      ) : (
        <div>
          {data
            ? data.map((data: any, idx: number) => <p>{data.title}</p>)
            : null}
        </div>
      )}
    </div>
  );
}

function Login() {
  const { signIn }: any = useContext(StateContext);
  const handleLogin = () => {
    signIn("userToken");
  };
  return (
    <div>
      <p>LoginComponent</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Account() {
  const { signOut }: any = useContext(StateContext);
  const handleSignOut = () => signOut();
  return (
    <div>
      <p>AccuntComponent</p>
      <button onClick={handleSignOut}>Login</button>
    </div>
  );
}

function NotFoundScreen() {
  return <div>Url not configured</div>;
}

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoute component={Account} exact path="/protected" />
        <Route exact path="**">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}
