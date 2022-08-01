

let Login = () => {

    return <div className="login">

          <form action="">
              <h1>Login</h1>
              <div className="login-email">
                  <label className="login-email-label"  htmlFor="">Enter Email</label>
                  <input className="login-email-input" type="email" name="" id="" />
              </div>
              <div className="login-password">
                  <label  className="login-password-label" htmlFor="">Enter Password</label>
                  <input className="login-password-input" type="text" name="" id="" />
              </div>

               <div className="login-button" > 
                     <button> LOGIN  </button>
              </div>

              <div  className="no-account">
                <h3>Don`t Have An Account?  <a href="">signup</a>  </h3>
                </div>
          </form>
         
         
    </div>
}


export default Login;