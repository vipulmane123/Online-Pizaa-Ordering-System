import { BrowserRouter, Link, Route, Routes, Switch, useHistory } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import ContactComponent from './ContactComponen';
import AboutusComponent from './AtboutUsComponent';
import NotFoundComponent from './NotFound';
import RegistrationComponent from './RegistrationComponent';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ProtectedRoute from './ProtectedRoute';
import delivery from '../assests/delivery.png';

function MainUiComponent(){
    return (<div className='content'>
   
    <hr></hr>
    <Link to={"/home"}>Home</Link>{" "}<br></br>
    <Link to={"/login"}>Login</Link> {" "}<br></br>
    <Link to={"/contact"}>Contact</Link>{" "}<br></br>
    <Link to={"/aboutus"}>About us</Link>{" "}<br></br>
    <Link to={"/register"}>Registration</Link>{" "}<br></br>
    <hr></hr>
    </div>
    
    
    )
}
export default MainUiComponent;