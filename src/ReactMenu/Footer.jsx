import React from 'react'

const Footer = () => {
    let currDate=new Date();
    currDate=currDate.getFullYear();
  return (
    <>
        <footer className="w-100 bg-light text-center">
            <p> © {currDate} React Website. All Rights Reserved | Terms and Conditions</p>
        </footer>
    </>
  )
}

export default Footer
