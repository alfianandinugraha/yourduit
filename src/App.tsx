import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedAuthRoute } from './Auth/ProtectedAuthRoute';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import { ActivityPage } from './Pages/ActivityPage';
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
                <DashboardPage />
              </Route>
              <Route path="/activities/:id">
                <ActivityPage />
              </Route>
            </Switch>
          </ProtectedRoute>
        </Switch>
      </Store>
    </>
  );
}

export default App;
