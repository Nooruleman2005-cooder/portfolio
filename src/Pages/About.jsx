import React from "react"

const About = () => {
  return (
    <>
      <div className='about'>
        <h1 data-aos="fade-up">About Me</h1>
        <p style={{ fontSize: "16px" }} data-aos="fade-up">
          I am Noor Ul Eman, a passionate web developer with experience in creating
          responsive and user-friendly websites. I enjoy working with modern
          technologies like React, Node.js, and MongoDB to build efficient and
          scalable applications. My goal is to keep learning, improving my skills,
          and delivering creative digital solutions.
        </p>
        <p style={{ fontSize: "16px" }} data-aos="fade-up">
          <strong>Education:</strong> <br />
          • Intermediate from Govt. Girls College Bufferzone Karachi (2023) <br />
          • Web and Mobile Application Development from SMIT Saylani Mass IT Traning Center (2025)
        </p>
        <p style={{fontSize: "30px" , color: 'red'}} data-aos="fade-up">
          <strong>Here's My Skills:</strong></p>
        <div className='skills'>
          <div className='skill'>
            <h2>Html</h2>
            <img data-aos="fade-up" src="./src/assets/html-removebg-preview.png" alt="" />
          </div>
          <div className='skill'>
            <h2>Css</h2>
            <img data-aos="fade-up" src="./src/assets/css-removebg-preview.png" alt="" />
          </div>
          <div className='skill'>
            <h2>JavaScript</h2>
            <img  data-aos="fade-up" src="./src/assets/js-removebg-preview.png" alt="" />
          </div>
          <div className='skill'>
            <h2>React</h2>
            <img data-aos="fade-up" src="./src/assets/react-removebg-preview.png" alt="" />
          </div>
          <div className='skill'>
            <h2>NodeJs</h2>
            <img data-aos="fade-up" src="./src/assets/nodejs-removebg-preview.png" alt="" />
          </div>
          <div className='skill'>
            <h2>Mongodb</h2>
            <img data-aos="fade-up" src="./src/assets/mongodb-removebg-preview.png" alt="" />
          </div>
          <div className='skill'>
            <h2>Bootstrap</h2>
            <img data-aos="fade-up" src="./src/assets/bootstrap-removebg-preview.png" alt="" />
          </div>
          <div className='skill'>
            <h2>TaiwindCss</h2>
            <img data-aos="fade-up" src="./src/assets/tailwind-removebg-preview.png" alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default About
