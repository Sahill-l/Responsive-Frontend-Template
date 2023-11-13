import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <NavigationBar />

      {/* body of contact page */}
      <div className='container-fluid '>
        <h2 className="featurette-heading fw-normal lh-1 text-body-secondary fw-bold text-center mt-5">
          CONTACT US
        </h2>
        <p className='text-center'>
          Heyo! We are located in Ghaziabad. Feel free to contact us and use our contact form to the right to reach out to us or write us the old fashion way.
        </p>
      </div>

      <div className='d-flex mt-5'>

        <div className='container col-md-4 '>
          <div className='container mt-2 w-75'>
            <h4 className="featurette-heading fw-normal lh-1 text-body-secondary fw-bold  mt-2">
              ELECTRONIC MAIL:
            </h4>
            <p>abc99@gmail.com</p>
            <hr className="featurette-divider" />
          </div>


          <div className='container mt-5  w-75'>
            <h4 className="featurette-heading fw-normal lh-1 text-body-secondary fw-bold  mt-2">
              PHONE SUPPORT:
            </h4>
            <p>Hours: 9am to 5pm <br />
              Monday to Friday <br />
              +91 2233641454</p>
            <hr className="featurette-divider" />
          </div>

          <div className='container mt-5  w-75'>
            <h4 className="featurette-heading fw-normal lh-1 text-body-secondary fw-bold  mt-2">
              ADDRESS:
            </h4>
            <p>Sikri Khurd Street no. 5, Building no.10 <br/>Modinagar (Ghaziabad)<br/>201204</p>

          </div>
        </div>
        <div className='container col-md-6 col-xs-offset-right-2'>
          <form action='https://formspree.io/f/mdorzdoq' method='POST'>
          <div className="form-group">
              <label>Your Name</label>
              <input type="text" className="form-control"  placeholder="Enter Your Name" required />
            </div>
            <div className="form-group mt-2">
              <label >Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com" required />
            </div>
            <div className="form-group mt-2">
              <label >Query Type</label>
              <select className="form-control mt-2" >
                <option>Web Develpment</option>
                <option>Technology</option>
                <option>Coding Languages</option>
                <option>Suggestions regarding some update in website.</option>
                <option>Others</option>
              </select>
            </div>

            <div className="form-group mt-2">
              <label >Message</label>
              <textarea className="form-control"  rows="3"></textarea>
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary mt-4'>Submit</button>
            </div>
          </form>
        </div>
      </div>

<Footer/>
      
    </>
  )
}

export default Contact