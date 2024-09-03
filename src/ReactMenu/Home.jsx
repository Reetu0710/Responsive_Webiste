import React from 'react'
import assets from "../images/home.jpg";
import Common from './Common';

const Home = () => {
  return (
    <>
        <Common
            imgsrc={assets}
            visit="./service"
            btname="Get Started"
            title="Grow your business skill with"
        />
    </>
  )
}

export default Home
