import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import Herosection from './components/herosection/herosection';
import Benefit from './components/benefit/benefit'
import Getstarted from './components/getstarted/getstarted';
import Dropfile from './components/dropfile/dropfile';
import Contributors from './components/contributors/contributors';
import Footer from './components/footer/footer';
import Signup from './components/signup/signup';
import About from './components/about/about';
import Contactus from './components/contactus/contactus';
import Login from './components/login/login';
import Profile from './components/profile/profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <Herosection/>
          <Benefit/>
          <Getstarted/>
          <Dropfile/>
          <Contributors/>
          <Footer />
        </Route>
        <Route path="/signup">
          {/* SignUp Page */}
          <Navbar />
          <Signup />
          <Footer />
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route path="/contactus">
          <Navbar />
          <Contactus/>
          <Footer />
        </Route>
        <Route path="/signup">
          <Navbar/>
          <Signup/>
          <Footer/>
        </Route>
        <Route path="/login">
          <Navbar/>
          <Login />
          <Footer/>
        </Route>
        <Route path="/profile">
          <Navbar/>
            <Profile/>
          <Footer/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
