import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import QuizPlay from "./components/QuizPlay";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/play/:type" exact component={QuizPlay} />
        <Route path="/result/:val" exact component={Result} />
      </Switch>
    </>
  );
}

export default App;
