
let Contacts = () => {

    return <div>
      

        
    <section className="contacts">


      
      <div className="contacts-content">
      <h2>Get In Touch !</h2>
      <p>Contacts Us For Any Issue In Booking An Appointment Or Any Issue</p>

      <form>
          <h3>Contact Form</h3>
          <div className="name" >
          <label htmlFor="">Your Name</label>
          <input type="text" />
          </div>
          <div className="mail">
          <label   htmlFor="">Mail</label>
          <input  type="text" />
          </div>
          <div className="message" >
          <label htmlFor="">Message</label>
          <textarea  name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button>Send</button>


      </form>
      </div>
    </section>
    </div>
}


export default Contacts;