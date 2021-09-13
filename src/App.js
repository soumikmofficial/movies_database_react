import "./App.scss";
import Home from "./components/home/Home";
import SingleMovie from "./components/singleMovie/SingleMovie";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id" children={<SingleMovie />} />
      </Switch>
    </div>
  );
}

export default App;
