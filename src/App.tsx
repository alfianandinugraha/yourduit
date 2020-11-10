import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { ProtectedAuthRoute } from './Auth/ProtectedAuthRoute';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import { HamburgerIcon } from './Common/HamburgerIcon';
import { Sidebar } from './Components/Sidebar';
import { ActivitiesPage } from './Pages/ActivitiesPage';
import { ActivityPage } from './Pages/ActivityPage';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { themeContext } from './Store/ThemeStore';

function App() {
  const { setIsSidebarShow, setIsBackdropShow } = useContext(themeContext)

  return (
    <>
      <Sidebar />
      <Container className="position-absolute w-50" style={{ top: 24, zIndex: 1 }}>
        <HamburgerIcon onClick={() => {
          setIsSidebarShow(true)
          setIsBackdropShow(true)
        }} />
      </Container>
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
    </>
  );
}

export default App;
