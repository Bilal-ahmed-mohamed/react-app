


let BookOnline = () => {

    return <div className="bookonline-form"> 
      
      <form action="">
          
          <div className="personal-details" >

              <span  className="name-area" >
              <label className=""  htmlFor="">Enter Your Name</label>
              <input type="text" name="" id="" />
              </span>
              <span className="email-area">
              <label htmlFor="">Enter Your Email</label>
              <input type="email" name="" id="" />
              </span>
          </div>

          <div className="appointment-details">
              <span className="date-area" >
              <label htmlFor="">Appointment Date</label>
              <input type="date" name="" id="" />
              </span>
              <span className="time-area">
              <label htmlFor="">Enter Your Preferred Time</label>
              <input type="time" name="" id="" />
              </span>
          </div>

          <div className="information-details">
              
              <span className="phone-area">
              <label htmlFor="">Enter Your Phone Number</label>
              <input type="tel" name="" id="" />
              </span>
              <span className="address-area">
              <label htmlFor="">Enter Your Address</label>
              <input type="text" name="" id="" />
              </span>
          </div>

          <div className="service-details">
              <span className="label-service">
              <label htmlFor="">Select  Service  Of Your Choice </label>
              </span>
              <span className="select-service">
              <select name="" id="">
                  <option value="">werty</option>
                  <option value="">sdfgh</option>
                  <option value="">sdfghj</option>
              </select>
              </span>
          </div>

          <div className="message-details">
              <label htmlFor="">Anything To Add</label>
              <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>

          <div className="submit-btn">
              <button>SUBMIT</button>
          </div>
      </form>
    </div>
}

export default BookOnline;