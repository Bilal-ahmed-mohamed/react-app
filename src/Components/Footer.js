import {FaTwitter, FaFacebook,FaLinkedin} from 'react-icons/fa'

let Footer = () => {

    return <div className="footer" >
        
        <div className="footer-area">
            <span>
                <p>Subsribe To Our News Letter</p>
                <input type="text" name=""  placeholder="Enter Email Address"  id="" />
            </span>
            <article>
                <h3>Address</h3>
                <p>10034 Eastleigh Nairobi</p>
                <p>kenya</p>
            </article>
            <article>
                <h3>Contact</h3>
                <p>+245123456789</p>
                <p>salon@gmail.com</p>
            </article>
            <article>
                <h3>Office</h3>
                <p>Monday - Sunday</p>
                <p>9am to 10pm</p>
            </article>
            </div>

            <hr />

             <div className="footer-socials" >
            
             <p>&copy;2022 copyright</p> 

            <a href=""> <FaTwitter  fontSize= "30px" />  </a>
            <a href=""><FaLinkedin   fontSize= "30px"/></a>
            <a href=""><FaFacebook  fontSize= "30px"/></a>

            
            </div>
      
       
    </div>
}


export default Footer;