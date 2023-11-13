import React from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'
import Typed from "react-typed"

const About = () => {
  return (
    <>
      <div>
        <NavigationBar />

        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-6">
              <img src={require("./myself1.jpg")} className='image-fluid myself'></img>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center ">
              <div className='container text-md-center text-lg-start '>
              <Typed className='typed-text' strings={["Hey! I'm Sahil."]} typeSpeed={40} backSpeed={60} loop />
              <br/>
                <strong className='text-secondary'>A Freelancer Full Stack Developer</strong>
                <p className='text-align-justify lead'>
                  Hello, I'm a Python full-stack developer with a passion for crafting robust web solutions. With experience in front-end technologies like HTML, CSS, and JavaScript, paired with back-end expertise in Python frameworks like Django and Flask, I excel at creating seamless user experiences. My proficiency in database management, API integration, and problem-solving allows me to build scalable, efficient, and user-friendly applications that meet clients' needs. Let's collaborate and turn ideas into reality!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h1 className='text-center fw-bold'>Specialities</h1>
              <p>A full-stack web developer possesses expertise in both front-end and back-end technologies, enabling them to design, develop, and maintain entire web applications. They excel in languages like HTML, CSS, JavaScript, and server-side frameworks like Node.js, Ruby on Rails, or Django, ensuring seamless user experiences and robust functionality.</p>
            </div>
          </div>
        </div>

        <div className="container clearfix">
          <div className="album py-2   bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                      <img src='https://cdn.mos.cms.futurecdn.net/gcV83ChaswQwxGAVw5osyK.jpg' />
                    <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <img src='https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg' />
                    <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <img src='https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w' />

                    <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5UAuVcVZO2s03P-2-707_D6SjSqKH16AMv7HqEJ8Lr3C02_coQ4nWtpyVeP9y0nkjZI&usqp=CAU' />
                    <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="col">
                  <div className="card shadow-sm">
                    <img src='https://www.fosslinux.com/wp-content/uploads/2022/01/mongoDB-database-operations.png'/>
                    <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="col">
                  <div className="card shadow-sm">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45wNBVRjeo82jKSWgh2nOoovONzX7wXqwUA&usqp=CAU'/>
                    <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.4604480366015!2d77.31351864367603!3d28.592869402745567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f72d5495a1%3A0xfd217b0c806989de!2sSector%206%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1693818991222!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About