import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

// New - import the React Router components, and the Profile page component
import Profile from "./components/Profile";
import history from "./utils/history";
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
        
        {/* Don't forget to include the history module */}
        <BrowserRouter>
            <Header />
            <main>
                <Container>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Container>
            </main>
        </BrowserRouter>
    </div>
  );
}


export default App;
