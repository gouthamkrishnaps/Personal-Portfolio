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
              <div className="social-links d-flex gap-5">
                <a href="https://www.linkedin.com/in/gouthamkrishnaps" target="_blank" className='fs-4 fw-bold' style={{textDecoration:"none",color:"white"}}><img src="https://beaconman.com/wp-content/uploads/2020/11/Linkedin_symbol_transparent.png" alt="" height={"50px"} width={"70px"} /> LinkedIn</a>
                <a href="https://github.com/gouthamkrishnaps" target="_blank" className='fs-4 fw-bold' style={{textDecoration:"none",color:"white"}}><img src="http://pngimg.com/uploads/github/github_PNG85.png" alt="" height={"50px"} width={"50px"} /> GitHub</a>
              </div>
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
      <div id='skills' className='skills '>
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
                <p className='text-center text-light'>HTML 5</p>
              </motion.div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
              <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.4 }}
                  className="react skill-card d-flex flex-column justify-content-center align-items-center">
                <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" alt="" />
                <p className='text-center text-light'>CSS 3</p>
              </motion.div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
              <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png" alt="" />
                <p className='text-center text-light'>JavaScript</p>
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
                  <p className='text-center text-light'>Bootstap</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                  <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }} 
                      transition={{ delay: 0.7 }}
                      className="react skill-card d-flex flex-column justify-content-center align-items-center">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                    <p className='text-center text-light'>React js</p>
                  </motion.div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                  <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }} 
                      transition={{ delay: 0.8 }}
                      className="react skill-card d-flex flex-column justify-content-center align-items-center">
                    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
                    <p className='text-center text-light'>Node js</p>
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
                  <p className='text-center text-light'>Express js</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 1 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/angularjs_original_logo_icon_146649.png" alt="" />
                  <p className='text-center text-light'>Angular js</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 1.1 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://logos-download.com/wp-content/uploads/2021/01/Git_Logo-420x420.png" alt="" />
                  <p className='text-center text-light'>Git</p>
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
                  <p className='text-center text-light'>Mongo DB</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.3 }} 
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://logospng.org/download/typescript/typescript-4096.png" alt="" />
                  <p className='text-center text-light'>TypeScript</p>
                </motion.div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 1.4 }}
                    className="react skill-card d-flex flex-column justify-content-center align-items-center">
                  <img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="" />
                  <p className='text-center text-light'>Redux</p>
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
              <div className="col-lg-6 col-md-12 col-sm-12 p-3 service-card ">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Full stack Developer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>As a full-stack MERN (MongoDB, Express.js, React.js, Node.js) developer, I offer comprehensive expertise in building modern, scalable, and dynamic web applications. With proficiency in both front-end and back-end technologies, I craft seamless user experiences and robust server-side functionalities. My skills include designing responsive UI/UX interfaces using React.js, implementing RESTful APIs with Node.js and Express.js, managing databases with MongoDB, and ensuring efficient deployment and maintenance of web applications. I bring a passion for clean code, agile methodologies, and continuous learning to every project</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12  col-sm-12 p-3 ">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Web Designer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>As a web designer, I specialize in creating visually stunning and intuitive user interfaces that enhance the digital experience for your audience. With a keen eye for aesthetics and a deep understanding of user behavior, I craft designs that not only look great but also drive engagement and conversion. My expertise includes creating responsive layouts, optimizing user flows, and incorporating modern design trends to create impactful websites and digital assets. I collaborate closely with clients to understand their brand identity and objectives, ensuring that every design reflects their vision and resonates with their target audience. </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12  col-sm-12 p-3 service-card ">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Front-end Developer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>I am a skilled front-end developer specializing in React.js, passionate about creating immersive and interactive user interfaces for web applications. With expertise in HTML, CSS, JavaScript, and React, I bring ideas to life by turning designs into responsive and dynamic components. I focus on optimizing performance, ensuring cross-browser compatibility, and implementing best practices to deliver fast and seamless user experiences. Whether it's building single-page applications, integrating APIs, or enhancing existing projects, I combine creativity with technical proficiency to produce visually appealing and functional solutions. I am dedicated to staying updated with the latest React developments and leveraging cutting-edge tools to deliver </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12  col-sm-12 p-3 ">
                <div className=' card-effect'>
                  <h4 className='text-center fw-bold desig-head'>Back-end Developer</h4>
                  <p className='mt-3' style={{textAlign:"justify"}}>I am an experienced back-end developer specializing in Node.js and MongoDB, with a focus on building scalable and efficient server-side solutions for web applications. Leveraging the power of JavaScript, I design and implement RESTful APIs, manage databases, and handle server logic to ensure seamless data flow and optimal performance. With expertise in Node.js frameworks like Express.js and database management using MongoDB, I develop secure authentication systems, manage user sessions, and integrate third-party services to enhance functionality. I also prioritize code quality, scalability, and maintainability, using industry best practices and testing methodologies to deliver reliable and optimized back-end solutions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-sm-0"></div>
        </div>
      </div>
      {/* <div id='projects' className=' row projects about-page'>
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
      </div> */}
      <section class="content-section" id='projects'>
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading text-center">
                    <h3 class="service-head text-light mb-0">Portfolio</h3>
                    <h2 class="text-light mb-5">Recent Projects</h2>
                </div>
                <div class="row gx-0">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }} class="col-lg-6 project-section">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2 fw-bold">Movifydotcom</div>
                                    <p class="mb-0">This is a Movie ticket booking wedsite with admin and user module that developed using the <b>MERN</b> Technologies like React Express Node MongoDB</p>
                                </div>
                            </div>
                            <img class="img-fluid" src={project1} alt="..." />
                        </a>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }} class="col-lg-6 project-section">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2 fw-bold">Project Management</div>
                                    <p class="mb-0">This is a Project Management website developed using the <b>MERN</b> Technologies like React Express Node MongoDB</p>
                                </div>
                            </div>
                            <img class="img-fluid" src={project2} alt="..." />
                        </a>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }} class="col-lg-6 project-section">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2 fw-bold">Media Player</div>
                                    <p class="mb-0">This is a Media player website ,users can add songs links and manage them and play , developed Technologies like <b>React </b></p>
                                </div>
                            </div>
                            <img class="img-fluid" src={project3} alt="..." />
                        </a>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }} 
                      class="col-lg-6 project-section">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2 fw-bold">Swiggy Clone</div>
                                    <p class="mb-0">This is a Swiggy website clone devdeloped using <b>React</b></p>
                                </div>
                            </div>
                            <img class="img-fluid" src={project5} alt="..." />
                        </a>
                    </motion.div>
                </div>
            </div>
      </section>
      <section class="py-5" id="features">
          <div class="container px-5 my-5">
          <h1 className='text-center text-light mb-5'>Experience</h1>
              <div class="row gx-5 exp">
                  <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 660,
                        damping: 20
                      }} class="col-lg-6 mb-5 mb-lg-0 exp-1">
                      <div class="feature bg-success bg-gradient text-white rounded-3 mb-3"><i class="fa-solid fa-chalkboard-user"></i></div>
                      <h3 class="h4 fw-bolder text-light">ME(A)RN STACK Development</h3>
                      <h5 className='text-light'>Luminar Technolab Pvt Ltd , Kochi</h5>
                      <p className='text-primary'>July 2023 - Feb 2024</p>
                      <p className='text-light ' style={{textAlign:"justify"}}>My Full stack development at Luminar Technolab Pvt Ltd in Kochi from June 2023 to February 2024, had the opportunity to work on real-world projects, collaborating with a team of experienced developers to build and enhance web applications. This hands-on experience allowed me to deepen my understanding of React.js, Node.js, MongoDB, and Express.js, sharpening my skills in front-end and back-end development I also learned about agile development methodologies, version control systems like Git, and the importance of responsive and user-friendly design.</p>
                      
                  </motion.div>
                  <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 660,
                        damping: 20
                      }} class="col-lg-6 mb-5 mb-lg-0 exp-2">
                      <div class="feature bg-success bg-gradient text-white rounded-3 mb-3"><i class="fa-solid fa-graduation-cap"></i></div>
                      <h3 class="h4 fw-bolder text-light">Bachelor of Computer Application (BCA)</h3>
                      <h5 className='text-light'>Don Bosco College , Thrissur</h5>
                      <p className='text-primary'>June 2020 - March 2023</p>
                      <p className='text-light' style={{textAlign:"justify"}}>My BCA program at Don Bosco College Mannuthy from June 2020 to March 2023, I delved into various aspects of computer applications. The curriculum covered a wide range programming languages like Java, C, and php, database management systems, web development, software engineering principles, and computer networking. I participated in practical sessions, projects, and seminars that enriched my understanding and skills in software development, data management, and IT infrastructure.</p>
                      
                  </motion.div>
                  {/* <div class="col-lg-4 exp-3">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="fa-solid fa-building-columns"></i></div>
                      <h3 class="h4 fw-bolder text-light">ME(A)RN STACK Development</h3>
                      <h5 className='text-light'>Luminar Technolab Pvt Ltd (Kochi)</h5>
                      <p className='text-light'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                      
                  </div> */}
              </div>
              
          </div>
      </section>
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