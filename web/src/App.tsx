import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Home from './pages/home';
import { Provider } from 'urql';
import client from './scripts/client';
import Dashboard from './pages/dashboard';
import { AuthContext } from './context/auth-context';
import {useEffect, useMemo, useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);

  const value =  useMemo(() => ({auth, setAuth}), [auth, setAuth]);

  useEffect(() => {
    if(localStorage.getItem('jid')){
      setAuth(true);
    }
    console.log(auth);
  }, [auth]);

  return (
    <Provider value={client}>
      <Router>
        <div className='App'>

          <AuthContext.Provider value={value}>
            <Switch>
              <Route exact path='/'>
                <Header/>
                <Home pageName='Athena' />
              </Route>
              <Route exact path='/signin'>
                <Header />
                <Signin pageName='Signin' />
              </Route>
              <Route exact path='/signup'>
                <Header/>
                <Signup pageName='Signup' />
              </Route>
              <Route exact path='/dashboard'>
                <Dashboard pageName='Dashboard' />
              </Route>
            </Switch>
            </AuthContext.Provider>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
