import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import QuizPlay from "./components/QuizPlay";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  const handleUser = (val) => {
    setUser(val);
  };
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          component={(props) => (
            <Login {...props} user={user} handleUser={(val)=>handleUser(val)} />
          )}
        />
        <Route
          path="/play/:type"
          exact
          component={(props) => (
            <QuizPlay {...props} user={user} handleUser={(val)=>handleUser(val)} />
          )}
        />
        <Route
          path="/result/:val"
          exact
          component={(props) => (
            <Result {...props} user={user} handleUser={(val)=>handleUser(val)} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
