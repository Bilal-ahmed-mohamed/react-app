import {MdCode,MdLogin,MdLogout} from 'react-icons/md'
import {Link} from 'react-router-dom';

let Navbar = () => {

    return <div classname = "" >
      
      <nav>
      
        <div className="logo"  >
            <h3>logo</h3>
        </div>

        <ul className="nav-links">
         <li> <Link to ="/">Home</Link> </li>
         <li> <Link to="/services">Services</Link> </li>
         <li> <Link to="/contacts">Contacts</Link>   </li>
         <li> <Link to="/book">BOOK AN APPOINTMENT</Link>  </li>
         
         
         
        </ul>
     
  
        <div className="signup-area">
        <li> <Link to ="/login">Login</Link> </li>
        <li> <Link to="/signup">SIgn Up</Link> </li>
      {/*   <MdLogin  fontSize="30px" color="white"  />
        <MdLogout fontSize="30px" color="white"/> */}
        
         
        </div>

    

      </nav>
       
    </div>
}


export default Navbar;