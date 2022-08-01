import React, { useState } from 'react';


let SignUp = ({firstName,lastName,email,phoneNumber,password ,setFirstName,setPhoneNumber,setLastName ,setEmail,setPassword}) => {


   /*  let signupHandler = (e) => {
       e.preventDefault();
      console.log('edited');
    } */

    return <div className="signup" >
      <form action="">
             <h1>REGISTER</h1>
             <div  className="name-signup" >
                 <span className="name-signup-span1"   >
                 <label className="name-signup-label1" htmlFor="">Firstname</label>
                 <input value={firstName}  onChange={ (e) => {
                     setFirstName(e.target.value)
                 } }     className="name-signup-input1" type="text" name="" id="" />
                 </span>
                 <span   className="name-signup-span2" >
                     <label  className="name-signup-label2" htmlFor="">Lastname</label>
                     <input value={lastName}   onChange={ (e) => {
                     setLastName(e.target.value)
                 } } 
                      className="name-signup-input2" type="text" name="" id="" />
                 </span>
             </div>
             <div  className="email-signup">
                 <span className="email-signup-span1" >
                 <label className="email-signup-label1"  htmlFor="">PhoneNumber</label>
                 <input  value={phoneNumber}  onChange={ (e) => {
                     setPhoneNumber(e.target.value)
                 } }       className="email-signup-input1" type="tel" name="" id="" />
                 </span>
                 <span className="email-signup-span2">
                     <label className="email-signup-label2" htmlFor="">Email</label>
                     <input value={email}    onChange={ (e) => {
                     setEmail(e.target.value)
                 } }    className="email-signup-input2" type="email" name="" id="" />
                 </span>
             </div>
             <div className="password-signup">
                 <span className="password-signup-span1">
                 <label className="password-signup-label1" htmlFor="">Password</label>
                 <input value={password}  onChange={ (e) => {
                     setPassword(e.target.value)
                 } }   className="password-signup-input1" type="text" name="" id="" />
                 </span>
                 <span className="password-signup-span2">
                     <label className="password-signup-label2" htmlFor=""> Confirm Password </label>
                     <input className="password-signup-input2" type="text" name="" id="" />
                 </span>
             </div>

               <div className="create-button">
                   <button /* onClick={signupHandler} */ >Create An Account</button>
               </div>
                
                <div  className="alrdy-account">
                <h3>Already have an account?  <a href="">Login</a>  </h3>
                </div>
             
           
         </form>
         
    </div>
}

export default SignUp;