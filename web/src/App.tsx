import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/signin">
            <Signin pageName="Signin" />
          </Route>
          <Route exact path="/signup">
            <Signup pageName="Signup" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
