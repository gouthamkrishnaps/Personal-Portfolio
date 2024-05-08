import React, { useRef } from 'react'
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import './home.css'
import Particles, { initParticlesEngine } from '@tsparticles/react';
import Img1 from '../assets/goutham pic.jpg'
import project1 from '../assets/movify.com.png'
import project2 from '../assets/Project fair.png'
import project3 from '../assets/Media Player.png'
import project4 from '../assets/Pets Clinic.png'
import project5 from '../assets/Swiggy clone.png'
import project6 from '../assets/Travel Vlog.png'

import { Button, Card } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"




function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      
      await loadSlim(engine);
      
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 6,
          },
          repulse: {
            distance: 100,
            duration: .1,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 300,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 1 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qhhae39', 'template_axw9whj', form.current, 'UrJIhTKwODFfB84DZ')
        .then((result) => {
            console.log(result.text);
            alert("message sent!")
        }, (error) => {
            console.log(error.text);
            alert("error sending message, try again!")
        });
    };

    
  return (
    <div className='container-fluid' style={{backgroundColor:"black"}}>
      <div id='home' className='landing-page'>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
        <div className="row">
          <div className="name-div col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <div className='text-box'>
              <span className='fw-bold'>Hello ,</span><br />
              <span className='fw-bold' style={{color:"red"}}>I'm Goutham Krishna</span>
              <div className='mt-5'>
                <p className='line-1 anim-typewriter fw-bold'>MERN STACK Developer</p>
              </div>
               <div className='know-btn'> <Button variant='outline-light' className='rounded-pill px-5'>Know more</Button></div>
            </div>
          </div>
          <div className="img-div col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
             <button className='resume-btn fw-bold border border-light rounded-pill px-5'> Download Resume  <i class="fa-solid fa-download"></i></button>
          </div>
        </div>
      </div>
      <section>
      <div id='about' className='about-page'>
        <div className='d-flex flex-column justify-content-center align-items-center' >
          <h1 className='abt-head'>About Me</h1>
          <div className='profile-img'>
            <img className='rounded-circle about-img' src={Img1} alt="" />
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-0"></div>
            <div className="col-lg-6 col-sm-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className='about-info'>
              <p className='abt-des'>I am a passionate MERN stack web developer with a strong foundation in modern web technologies. With expertise in building robust and scalable web applications, I thrive on turning ideas into interactive and user-friendly experiences. My journey in web development has equipped me with a diverse skill set, including proficiency in MongoDB, Express.js, React.js, and Node.js. I have hands-on experience in creating RESTful APIs, integrating third-party services, and optimizing application performance.
              <br/>
                  Additionally, I am adept at front-end technologies such as HTML, CSS, and JavaScript frameworks like Bootstrap and Material-UI. My goal is to leverage my skills to deliver innovative solutions that drive business growth and exceed user expectations, contributing positively to every project I work on.
              </p>
            </motion.div>
            </div>
            <div className="col-lg-3 col-sm-0"></div>
          </div>
        </div>
      </div>
      <div id='skills' className='skills about-page'>
        <h1 className='text-center skills-head'>Technical Skills</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <div className="row skill-container">
            <div className="col-lg-3 col-md-3 col-sm-0"></div>
            <div className="col-lg-6 col-md-6 col-sm-12 w-100">
              <div className='row mt-5 d-flex justify-content-center align-items-center'>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
              <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="react skill-card d-flex flex-column justify-content-center align-items-center">
                <img src="https://clipartcraft.com/images/html5-logo-png-transparent-5.png" alt="" />
                <p className='text-center'>HTML 5</p>
              </motion.div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
              <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.4 }}
                  className="react skill-card d-flex flex-column justify-content-center align-items-center">
                <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="" />
                <p className='text-center'>CSS 3</p>
              </motion.div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
              <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png" alt="" />
                <p className='text-center'>JavaScript</p>
              </motion.div>
              </div>
              </div>
             <div className='row mt-1 d-flex justify-content-center align-items-center'>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 0.6 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/012/697/297/original/3d-bootstrap-programming-framework-logo-free-png.png" alt="" />
                  <p className='text-center'>Bootstap</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                  <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }} 
                      transition={{ delay: 0.7 }}
                      className="react skill-card d-flex flex-column justify-content-center align-items-center">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                    <p className='text-center'>React js</p>
                  </motion.div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                  <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }} 
                      transition={{ delay: 0.8 }}
                      className="react skill-card d-flex flex-column justify-content-center align-items-center">
                    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
                    <p className='text-center'>Node js</p>
                  </motion.div>
                  </div>
             </div>
              <div className='row mt-1 d-flex justify-content-center align-items-center'>
                
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9 }} 
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://vectorified.com/images/express-js-icon-20.png" alt="" />
                  <p className='text-center'>Express js</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 1 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/angularjs_original_logo_icon_146649.png" alt="" />
                  <p className='text-center'>Angular js</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 1.1 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://logos-download.com/wp-content/uploads/2021/01/Git_Logo-420x420.png" alt="" />
                  <p className='text-center'>Git</p>
                </motion.div>
                </div>
              </div>
              <div className='row mt-1 d-flex justify-content-center align-items-center'>
               
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 1.2 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01-768x530.png" alt="" />
                  <p className='text-center'>Mongo DB</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.3 }} 
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://logospng.org/download/typescript/typescript-4096.png" alt="" />
                  <p className='text-center'>TypeScript</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 1.4 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="" />
                  <p className='text-center'>Redux</p>
                </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-0"></div>
          </div>
        </div>
      </div>

      <div id='services' className='services'>
        <h1 className='text-center service-head'>Services</h1>
        <div className="row mt-5">
          <div className="col-lg-1 col-sm-0"></div>
          <div className="col-lg-10 col-sm-12 p-5">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 p-3 service-card">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Full stack Developer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga expedita delectus sapiente eius sint numquam, qui fugiat asperiores est optio fugit id at eligendi nulla quasi cumque nam aspernatur soluta?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12  col-sm-12 p-3 service-card">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Web Designer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga expedita delectus sapiente eius sint numquam, qui fugiat asperiores est optio fugit id at eligendi nulla quasi cumque nam aspernatur soluta?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12  col-sm-12 p-3 service-card">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Front-end Developer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga expedita delectus sapiente eius sint numquam, qui fugiat asperiores est optio fugit id at eligendi nulla quasi cumque nam aspernatur soluta?</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12  col-sm-12 p-3">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Back-end Developer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga expedita delectus sapiente eius sint numquam, qui fugiat asperiores est optio fugit id at eligendi nulla quasi cumque nam aspernatur soluta?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-sm-0"></div>
        </div>
      </div>
      <div id='projects' className=' row projects about-page'>
        <h1 className='text-center project-head'>My Projects</h1>
        <div className="col-lg-1 col-sm-0"></div>
        <div className="col-lg-10 col-sm-12">
          <div className="row ">
            <div className="col-lg-4  col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Card bg='dark' text='light' className='rounded-5 card'>
              <Card.Img variant="top" src={project1} className='p-1 rounded-top-5'/>
              <Card.Body>
                <h3 className='fw-bold'>Movifydotcom</h3>
                <p style={{height:"100px"}}>
                  This is a Movie ticket booking wedsite with admin and user module that developed using the <b>MERN</b> Technologies like <b>React Express Node MongoDB</b>
                </p>
                <div className='d-flex justify-content-between w-100'>
                  <a href='https://movifydotcom-frontent-mern.vercel.app/' className='btn btn-outline-success rounded shadow' ><i class="fa-regular fa-circle-play"></i> </a>
                  <a href='https://github.com/gouthamkrishnaps/Movifydotcom-frontent-MERN' className='btn btn-outline-light rounded shadow' ><i class="fa-brands fa-github"></i></a>
                </div>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4  col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Card bg='dark' text='light' className='rounded-5 card'>
              <Card.Img variant="top" src={project2} className='p-1 rounded-top-5'/>
              <Card.Body>
                <h3 className='fw-bold'>Project-Management</h3>
                <p style={{height:"100px"}}>
                  This is a Project Management website developed using the <b>MERN</b> Technologies like <b>React Express Node MongoDB</b>
                </p>
                <div className='d-flex justify-content-between w-100'>
                  <a href='https://project-fair-frontent.vercel.app/' className='btn btn-outline-success rounded shadow' ><i class="fa-regular fa-circle-play"></i> </a>
                  <a href='https://github.com/gouthamkrishnaps/Project-fair-frontent-MERN' className='btn btn-outline-light rounded shadow' ><i class="fa-brands fa-github"></i></a>
                </div>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4  col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Card bg='dark' text='light' className='rounded-5 card'>
              <Card.Img variant="top" src={project4} className='p-1 rounded-top-5'/>
              <Card.Body>
                <h3 className='fw-bold'>Pets Home</h3>
                <p style={{height:"100px"}}>
                  This is a Veterinary Clinic website devdeloped for appointment booking made using <b>React</b>
                </p>
                <div className='d-flex justify-content-between w-100'>
                  <a className='btn btn-outline-success rounded shadow' ><i class="fa-regular fa-circle-play"></i> </a>
                  <a href='https://github.com/gouthamkrishnaps/Pets-home-frontend' className='btn btn-outline-light rounded shadow' ><i class="fa-brands fa-github"></i></a>
                </div>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4  col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Card bg='dark' text='light' className='rounded-5 card'>
              <Card.Img variant="top" src={project3} className='p-1 rounded-top-5'/>
              <Card.Body>
                <h3 className='fw-bold'>Media Player</h3>
                <p style={{height:"100px"}}>
                  This is a Media player website ,users can add songs links and manage them and play , developed Technologies like <b>React </b>
                </p>
                <div className='d-flex justify-content-between w-100'>
                  <a href='https://mediaplayer-frontend.vercel.app/' className='btn btn-outline-success rounded shadow' ><i class="fa-regular fa-circle-play"></i> </a>
                  <a href='https://github.com/gouthamkrishnaps/Media-player-Frontend' className='btn btn-outline-light rounded shadow' ><i class="fa-brands fa-github"></i></a>
                </div>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4  col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Card bg='dark' text='light' className='rounded-5 card'>
              <Card.Img variant="top" src={project5} className='p-1 rounded-top-5'/>
              <Card.Body>
                <h3 className='fw-bold'>Swiggy Clone</h3>
                <p style={{height:"100px"}}>
                  This is a Swiggy website clone devdeloped using <b>React</b>
                </p>
                <div className='d-flex justify-content-between w-100'>
                  <a href='https://swiggy-clone-sage.vercel.app/' className='btn btn-outline-success rounded shadow' ><i class="fa-regular fa-circle-play"></i> </a>
                  <a href='https://github.com/gouthamkrishnaps/Swiggy-clone' className='btn btn-outline-light rounded shadow' ><i class="fa-brands fa-github"></i></a>
                </div>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4  col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Card bg='dark' text='light' className='rounded-5 card'>
              <Card.Img variant="top" src={project6} className='projectimg p-1 rounded-top-5'/>
              <Card.Body>
                <h3 className='fw-bold'>Travel Vlog</h3>
                <p style={{height:"100px"}}>
                  A Movie Travel Vlog and packege website that developed using <b>HTML CSS Bootstrap</b>
                </p>
                <div className='d-flex justify-content-between w-100'>
                  <a href='https://travelpacificousa.netlify.app/' className='btn btn-outline-success rounded shadow' ><i class="fa-regular fa-circle-play"></i> </a>
                  <a href='https://github.com/gouthamkrishnaps/Travel-Pacifico' className='btn btn-outline-light rounded shadow' ><i class="fa-brands fa-github"></i></a>
                </div>
              </Card.Body>
            </Card>
            </div>
            
          </div>
        </div>
        <div  className="col-lg-1 col-sm-0"></div>
      </div>
      <div id='contact' className='contact d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center contact-head'>Contact me</h1>
        <div className="form w-100 mt-5 contact-div">
          <p className='text-center'>Or connect directly @ <span style={{color:'grey'}}>gouthamkrishnaps02@gmail.com</span></p>
          <div className="row">
            <div className="col-lg-3  col-sm-0"></div>
            <div className="col-lg-6  col-sm-12">
            <form ref={form} onSubmit={sendEmail} className='w-100'>
              <input name='user_name' className='form-control input-box rounded' type="text" placeholder='Your Name' required />
              <input name='user_email' className='form-control input-box rounded mt-3' type="email" placeholder='Your Email-ID' required />
              <textarea rows={6} name='user_message' className='form-control input-box rounded mt-3' placeholder='Write message...' required ></textarea>
              <button className='contact-btn btn btn-success rounded mt-3' type="submit">Send Email  <i class="fi fi-br-paper-plane-top"></i></button>
            </form>
            </div>
            <div className="col-lg-3  col-sm-0"></div>
          </div>
          
        </div>
        <p className='text-center mt-5'>Copyright © 2024 Goutham Krishna P S | Personal Portfolio. Built with React.</p>
      </div>
    </section>
      
    </div>
  )
}

export default Home