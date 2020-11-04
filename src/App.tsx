import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { ProtectedAuthRoute } from './Auth/ProtectedAuthRoute';
import { ProtectedRoute } from './Auth/ProtectedRoute';
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
            <ProtectedAuthRoute>
              <LoginPage />
            </ProtectedAuthRoute>
          </Route>
          <ProtectedRoute> 
            <Switch>
              <Route path="/dashboard">
                <Container>
                  <IncludeCashSummary>
                    <DashboardPage />
                  </IncludeCashSummary>
                </Container>
              </Route>
            </Switch>
          </ProtectedRoute>
        </Switch>
      </Store>
    </>
  );
}

export default App;
