import React from 'react'
import assets from "../images/h2.png";
import Common from './Common';

const About = () => {
  return (
    <>
        <Common
            imgsrc={assets}
            visit="./contact"
            btname="Contact Us"
            title="Welcome to Coding World"
            para="We aim to enhance the knowledge of Developement."
        />
    </>
  )
}

export default About

