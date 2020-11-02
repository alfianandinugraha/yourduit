import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { Store } from './Store/Store';

function App() {
  return (
    <>
      <Store>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <Container>
              <DashboardPage />
            </Container>
          </Route>
        </Switch>
      </Store>
    </>
  );
}

export default App;
