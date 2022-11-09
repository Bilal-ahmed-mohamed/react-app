import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'
import './App.css';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SIgnUp';
import Login from './Components/Login';
import BookOnline from './Components/BookOnline';
import ErrorBoundary from './Components/ErrorBoundary';
 

function App() {


  const [services , setServices]  = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [PhoneNumber , setPhoneNumber] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');


  
     useEffect(() => {
        fetch('http://localhost:3900/services')
        .then(res => {
          return  res.json()
        }) 
        .then(data => {
       
          setServices(data)
        })
      } , [])
        
       
      
      
      
 /*  throw Error('ooopps');    */   

  return (
    <Router>
   
    <div className="App">


    
    <div className="navbar">
          <Navbar/>
    </div>

    <div className="content">
     <Switch>
       <Route exact path= "/" >
       { services && <Home  services  = {services } setServices = {setServices}   />}
       </Route>
       <Route  path= "/services" >
         <Services/>
       </Route>
       <Route path= "/contacts">
         <Contacts/>
       </Route>
       <Route path= "/book">
         <BookOnline/>
       </Route>
       <Route  path= "/login" >
          <Login/>
       </Route>
       <Route  path= "/signup" >
        <SignUp 
         firstName ={firstName} lastName = {lastName} email ={email}
          PhoneNumber ={PhoneNumber} password ={password} 
          setFirstName = {setFirstName} setPhoneNumber ={setPhoneNumber} setLastName = {setLastName}
          setEmail = {setEmail} setPassword = {setPassword}
         />
       </Route>
     </Switch>
    </div>
     <div>
      <Footer/>
    </div>
     

    </div>
    
    </Router>
  );
}

export default App;
