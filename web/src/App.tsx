import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import { Provider } from "urql";
import client from "./utils/client";
import Dashboard from "./pages/dashboard";

function App() {
  return (
      <Provider value={client}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home pageName="Athena"/>
              </Route>
              <Route exact path="/signin">
                <Signin pageName="Signin"  />
              </Route>
              <Route exact path="/signup">
                <Signup pageName="Signup"  />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard pageName="Dashboard" />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
