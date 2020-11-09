import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { ProtectedAuthRoute } from './Auth/ProtectedAuthRoute';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import { HamburgerIcon } from './Common/HamburgerIcon';
import { ActivitiesPage } from './Pages/ActivitiesPage';
import { ActivityPage } from './Pages/ActivityPage';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { Store } from './Store/Store';

function App() {
  return (
    <>
      <Container className="position-absolute" style={{top: 24}}>
        <HamburgerIcon />
      </Container>
      <Store>
        <Switch>
          <Route path="/dashboard">
            <ProtectedRoute> 
              <DashboardPage />
            </ProtectedRoute>
          </Route>
          <Route exact path="/activities">
            <ProtectedRoute> 
              <ActivitiesPage />
            </ProtectedRoute>
          </Route>
          <Route path="/activities/:id">
            <ProtectedRoute> 
              <ActivityPage />
            </ProtectedRoute>
          </Route>
          <Route exact path="/">
            <ProtectedAuthRoute>
              <LoginPage />
            </ProtectedAuthRoute>
          </Route>
        </Switch>
      </Store>
    </>
  );
}

export default App;
