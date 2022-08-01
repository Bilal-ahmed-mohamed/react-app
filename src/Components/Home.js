
let Home = ({ services , setServices}) => {

    return <div>
    
    <section className="hero-area" >

                <div className="hero-abt">
                    <h1>PROFESSIONALS HAIR , MAKEUP AND  NAIL SALON</h1>
                    <p>
                        we at our salon beleive that a strong phsycoligal link exists  <br /> between looking your best
                        and feeling confident about yourself <br />
                        Our salon offers complete salon services to pamper yoir body <br /> and spirit. our exciting 
                        salon offers for men and women ......
                    </p>
                    <button className="read-more"  >Read More</button>
                </div>
                <div className="hero-img">
                    <img src="/Images/pexels-delbeautybox-853427.jpg" alt="" />
                
                    
                </div>


                </section>

                
        <section className="services">     
      {
         services.map((service) => (

          <div className="card-details"  key={service.id} >
            <img src= {service.image} alt="" />
            <span>{service.title}</span>
            <article>
            {service.body}
            </article>
            <button>BOOK NOW</button>

            
          
            
             </div> 
             


         ))
      }

    </section>


    </div>
}


export default Home;