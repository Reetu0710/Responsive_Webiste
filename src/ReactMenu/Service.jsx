import React from 'react'
import Sdata from './SData'
import Card from './Card'

const Service = () => {
  return (
    <>
        <div className="my-5">
            <div className="text-center">
                <h1 className="my-5">Our Services</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val,index)=>{
                                    return (
                                    <Card
                                        key={index}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        para={val.para}
                                    />
                                    )
                                })
                            }
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service
