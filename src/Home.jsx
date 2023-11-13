import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Typed from "react-typed";
const Home = () => {
  return (
    <>

      

      {/* navBAr */}
      <NavigationBar />

      {/* crouser */}

      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" height={700 + "em"} className="d-block w-100" alt="Slider1"></img>
            <div className="carousel-caption  d-md-block">
              <Typed className='typed-text' strings={["Coding For Everyone","Let's Code With Me"]} typeSpeed={40} backSpeed={60} loop />
              <p >Coding is no longer just for computer scientists or those looking for jobs in the IT industry. In 2020, India made coding mandatory for all students of 6th grade and above.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1684493735679-359868df0e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" height={700 + "em"} className="d-block w-100" alt="Slider2" />
            <div className="carousel-caption d-none d-md-block">
              <h2>AI that Codes</h2>
              <p >Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" height={700 + "em"} className="d-block w-100" alt="Slider 3" />
            <div className="carousel-caption d-none d-md-block">
              <h2> Creativity and Community</h2>
              <p >The world has known for quite a while that coding fosters logical thinking and provides a way to express creativity in the form of problem solving and solution creation..</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr className="featurette-divider" />
      <h2 className="featurette-heading fw-normal lh-1 text-center fw-bolder display-6">TOP 3 TRENDING CODING LANGUAGES YOU HAVE TO LEARN IN 2023</h2>

      {/* _____________________________________________________________________________________________________________________________________ */}


      {/* <!-- START THE FEATURETTES --> */}
      <div className="container marketing " style={{ marginTop: 4 + "em" }}><div className="row featurette">
      <div className="col-lg-5 order-lg-2">
          <img className='img-fluid w-100 h-100' src='https://cdn.activestate.com/wp-content/uploads/2021/12/python-coding-mistakes.jpg' alt='Python' width={500 + "em"} height={500 + "em"}></img>
        </div>
        <div className="col-lg-7 order-lg-1">
          <h2 className="featurette-heading fw-normal lh-1 text-body-secondary fw-bold my-lg-0 my-md-3">1.  Python</h2>
          <p className="lead text-justify">Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. Created by Guido van Rossum, it emphasizes clean and concise code, making it ideal for beginners and experienced developers alike. Python's extensive standard library provides pre-built modules and functions, reducing the need for manual coding. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming, and is widely used in web development, data analysis, artificial intelligence, scientific computing, and more. Its popularity is attributed to its strong community support, vast ecosystem of third-party libraries (e.g., NumPy, Django, TensorFlow), and cross-platform compatibility, making it a go-to language for various applications.</p>
        </div>
       
      </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
        <div className="col-lg-5 order-lg-1">
            <img className='img-fluid w-100 h-100' src='https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png' alt='JS' width={500 + "em"} height={500 + "em"} />
          </div>
          <div className="col-lg-7 order-lg-2">
            <h2 className="featurette-heading fw-normal lh-1 text-body-secondary fw-bold">2. JavaScript</h2>
            <p className="lead">JavaScript is a versatile and widely-used programming language that primarily runs in web browsers, enabling interactive and dynamic web content. It's a key component in modern web development, allowing developers to create responsive and user-friendly websites. JavaScript is known for its simplicity and ease of use, making it accessible to both beginners and experienced developers. One of its main features is its ability to manipulate the Document Object Model (DOM), which represents the structure of web pages, allowing developers to change content, styles, and interact with users in real-time. JavaScript supports event handling, enabling actions like form validation, animations, and responsive design. Moreover, JavaScript has expanded beyond the browser with technologies like Node.js, which allows server-side scripting, and it's widely used in developing web applications, mobile apps, and even desktop software. Its rich ecosystem includes libraries and frameworks like React, Angular, and Vue.js, making it a powerful tool for building interactive and feature-rich web applications.</p>
          </div>
         
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
        <div className="col-lg-5 order-lg-2">
            <img className='img-fluid w-100 h-100' src='https://www.filepicker.io/api/file/S5atf80QTb2tZOScHsiW' alt='react' width={500 + "em"} height={500 + "em"} />
          </div>
          <div className="col-lg-7 order-lg-1">
            <h2 className="featurette-heading fw-normal lh-1 text-body-secondary fw-bold">3. ReactJS</h2>
            <p className="lead text-justify">React, a popular JavaScript library developed by Facebook, is designed for building user interfaces (UIs) that are both interactive and efficient. It utilizes a component-based architecture, allowing developers to create reusable UI elements and manage complex interfaces with ease. React uses a virtual DOM (Document Object Model) for optimizing performance by minimizing actual DOM updates, resulting in faster rendering times and a smoother user experience. It can be seamlessly integrated with other JavaScript libraries or frameworks, making it a versatile choice for single-page applications, mobile app development (with React Native), and web applications. Its strong community and extensive ecosystem of libraries and tools contribute to its widespread adoption in modern web development.</p>
          </div>
         
        </div>

      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default Home;