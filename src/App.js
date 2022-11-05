import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import Herosection from './components/herosection/herosection';
import Benefit from './components/benefit/benefit'
import Getstarted from './components/getstarted/getstarted';
import Dropfile from './components/dropfile/dropfile';
import Contributors from './components/contributors/contributors';
import Footer from './components/footer/footer';
import DoctorSignup from './components/signup/Doctor/doctorsignup';
import PatientSignup from './components/signup/Patient/patientsignup';
import About from './components/about/about';
import Contactus from './components/contactus/contactus';
import DoctorLogin from './components/login/Doctor/Doctorlogin';
import PatientLogin from './components/login/Patient/Patientlogin';
import DoctorProfile from './components/profile/Doctor/doctorprofile';
import PatientProfile from './components/profile/Patient/patientprofile';


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
        <Route path="/signup/doctor">
          <Navbar/>
          <DoctorSignup/>
          <Footer/>
        </Route>
        <Route path="/signup/patient">
          <Navbar/>
          <PatientSignup/>
          <Footer/>
        </Route>
        <Route path="/login/doctor">
          <Navbar/>
          <DoctorLogin/>
          <Footer/>
        </Route>
        <Route path="/login/patient">
          <Navbar/>
          <PatientLogin/>
          <Footer/>
        </Route>
        <Route path="/profile/doctor">
          <Navbar/>
            <DoctorProfile/>
          <Footer/>
        </Route>
        <Route path="/profile/patient">
          <Navbar/>
            <PatientProfile/>
          <Footer/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
