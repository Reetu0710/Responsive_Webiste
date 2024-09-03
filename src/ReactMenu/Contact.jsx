import React, { useState } from 'react'

const Contact = () => {
  const[data,setData]=useState({
      fullName:"",
      number:"",
      email:"",
      msg:""
  })
  const inputEvent=(event)=>{
      const{name,value}=event.target;
      setData((prev)=>{
        return{
          ...prev,
          [name]:value
        }
      })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My Mobile Number is ${data.number}. My email is ${data.email}.Here is my choice to choose the ${data.msg} course.`
    )

  }
  return (
   <>
    <div className="my-3">
      <div className="text-center contact ">
        Contact us
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" 
        name="fullName" 
        value={data.fullName} 
        onChange={inputEvent} placeholder="Enter your name"/>
        </div>
            <div class="mb-3">
         <label for="exampleFormControlInput2" class="form-label">Phone Number</label>
        <input type="number" class="form-control" id="exampleFormControlInput2"
         name="number"
         value={data.number} 
         onChange={inputEvent} placeholder="Enter your Mobile Number"/>
        </div>
            <div class="mb-3">
         <label for="exampleFormControlInput3" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput3"
         name="email" 
        value={data.email} 
        onChange={inputEvent} placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control"
   name="msg" 
        value={data.msg} 
        onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">
     Submit form</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Contact
