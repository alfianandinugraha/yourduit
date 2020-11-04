import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import { ActivityForm } from './Components/ActivityForm';
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
          <ProtectedRoute> 
            <Switch>
              <Route path="/dashboard">
                <Container>
                  <IncludeCashSummary>
                    <DashboardPage />
                    <ActivityForm />
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
