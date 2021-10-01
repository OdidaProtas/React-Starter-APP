import { useMemo, useReducer, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppNavigation from "./navigation/AppNavigation";
import {
  initialState,
  reducer,
  StateContext,
  stateMemo,
  bootstrapAsync,
} from "./state";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState) as any;
  const stateContext: any = useMemo(() => stateMemo(dispatch, state), []);
  const getAppState = () => state;
  useEffect(() => {
    const bootstrap = () => bootstrapAsync(dispatch);
    bootstrap();
  }, []);
  return (
    <StateContext.Provider value={{ ...stateContext, getAppState }}>
      <AppNavigation />
    </StateContext.Provider>
  );
}

export default App;
