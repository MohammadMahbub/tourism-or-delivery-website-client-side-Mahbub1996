import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import DestinationDetails from './Components/DestinatinDetails/DestinationDetails';
import About from './Components/About/About';
import Packages from './Components/Packages/Packages';
import PackageDetails from './Components/PackageDetails/PackageDetails';
import Contact from './Components/Home/Contact/Contact';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import BookingPage from './Components/BookingPage/BookingPage';
import YourBookingPage from './Components/YourBooking/YourBookingPage';
export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="/about">
              <Layout>
                <About />
              </Layout>
            </Route>
            <Route path="/packages">
              <Layout>
                <Packages />
              </Layout>
            </Route>
            <Route path="/contact">
              <Layout>
                <Contact />
              </Layout>
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/my-booking">
              <Layout>
                <YourBookingPage />
              </Layout>
            </Route>

            <PrivateRoute path="/booking/:packageName">
              <Layout>
                <BookingPage />
              </Layout>
            </PrivateRoute>

            {/* <PrivateRoute path="/package/:packageName">
              <Layout>
                <PackageDetails />
              </Layout>
            </PrivateRoute> */}

            <Route path="/package/:packageName">
              <Layout>
                <PackageDetails />
              </Layout>
            </Route>
            <Route path="/destination/:name">
              <Layout>
                <DestinationDetails />
              </Layout>
            </Route>
            <Route exact path="/">
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="*">
              <h3>Page Not Found </h3>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
