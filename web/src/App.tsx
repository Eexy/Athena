import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import { Provider } from "urql";
import client from "./utils/client";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [, setCookie] = useCookies(["jid"]);

  const handleNewAuthToken = (token: string) => {
    setCookie("jid", token, { path: "/" });
  };

  return (
    <CookiesProvider>
      <Provider value={client}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/signin">
                <Signin pageName="Signin" setAuthToken={handleNewAuthToken} />
              </Route>
              <Route exact path="/signup">
                <Signup pageName="Signup" setAuthToken={handleNewAuthToken} />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
