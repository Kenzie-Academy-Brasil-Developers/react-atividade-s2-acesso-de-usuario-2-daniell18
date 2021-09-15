import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import { members } from "./clients";
import Customer from "./components/pages/Customer/indes";
import Company from "./components/pages/Company";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/customer/:id">
          <Customer members={members} />
        </Route>
        <Route exact path="/company/:id">
          <Company members={members} />
        </Route>
        <Route exact path="/">
          <Home members={members} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
