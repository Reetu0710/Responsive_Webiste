import React from 'react'
import assets from "../images/home.jpg";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Common = (props) => {
  return (
    <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row ">
                        <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.title}  
                            <strong className="brand-name">  ApnaCollege </strong></h1>
                            <h2 className="my-4">
                               {props.para}
                            </h2>
                            <div className="mt-2">
                                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Common
