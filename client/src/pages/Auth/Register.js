import { useState } from "react";
import React from 'react'
import Layout from '../../components/Layout/Layout';
// import axios from axios;
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setnumber] = useState('');
    const [Address, setaddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', name, email, password, Address, phone);
    toast.success("Register Successfully");
  };
  return (
    <Layout title="Register - Ecommerce App">
           <div className="container  mt-3">
      <section className='d-flex justify-content-between'>
        <div className="left_data mt-3" style={{width:"100%"}}>
        <h3 className='text-center col-lg-6'>Sign Up</h3><form>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <input
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name"
            required/>
        </div>
        <div className="mb-3">
            <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Email"
            required/>
        </div>
        <div className="mb-3">
            <input
            type="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Password"
            required/>
        </div>
        <div className="mb-3">
            <input
            type="text"
            value={phone}
            onChange={(e)=> setnumber(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Phone number"
            required/>
        </div>
        <div className="mb-3">
            <input
            type="email"
            value={Address}
            onChange={(e)=> setaddress(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Address"
            required/>
        </div>
    </form>
    <div className="mb-3 form-check">
     
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>


</div>
        <div className="right_data ">
          <div className="download_img " style={{width:"100%"}}>
            <img  src="https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=600" style={{maxWidth:400 , maxHeight:550}} alt="" />

          </div>
        </div>
        </section>
        </div>
        
    </Layout>
    
  )
}

export default Register