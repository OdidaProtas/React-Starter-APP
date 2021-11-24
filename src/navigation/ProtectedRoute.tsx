import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { StateContext } from "../state";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  const { getAppState }: any = useContext(StateContext);
  const { isLoggedIn } = getAppState();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
