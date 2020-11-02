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
          <Container>
            <Route exact path="/dashboard">
              <DashboardPage />
            </Route>
          </Container>
        </Switch>
      </Store>
    </>
  );
}

export default App;
