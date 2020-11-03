import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { IncludeCashSummary } from './Components/CashSummary';
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
          <Switch>
            <Route path="/dashboard">
              <Container>
                <IncludeCashSummary>
                  <DashboardPage />
                </IncludeCashSummary>
              </Container>
            </Route>
          </Switch>
        </Switch>
      </Store>
    </>
  );
}

export default App;
