import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//importing the components
import Login from './component/login/login';
import Signup from './component/signup/signup';
import Homepage from './component/homepage/homepage';
import Dashboard from './component/dashboard/dashboard';
import Profile from './component/profile/profile';
import { useContext } from 'react';
import AuthContext from './context/AuthProvider';
import Navbar from './component/navbar/navbar';

//importing auth



function App() {
  const auth = useContext(AuthContext);

  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/login" >
            <Login/> 
          </Route> 
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route exath path="/">
            <Homepage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
  );
}

export default App;
