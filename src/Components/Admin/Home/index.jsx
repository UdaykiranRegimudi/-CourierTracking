
import React from 'react';
import { RiFindReplaceLine } from "react-icons/ri";

import './index.css'

const Home = () => {
  return (
    <div className=''>
        <div className='flex'>
        <div className="mt-16">
          <h1 className='font text-white text-xl mt-24 font-bold'>Global Package Tracking</h1>
          <h1 className='font text-white w-2/3 mt-3 font-bold'>Track your package from different companies like Amazon, Flipkart, Myntra, and other e-commerce platforms.</h1>
          <div className='bg-white flex mt-5 w-2/3 h-14 rounded-md'>
          <input type="number" placeholder='Enter tracking number' className='form-control'/>
          <button className='btn btn-primary'>
            <div style={{width:'5vh',textAlign:'center',display:'flex',justifyContent:'center'}}>
                <RiFindReplaceLine/>
            </div>
          </button>
          
          </div>
          
          </div>
          <img style={{width:'35%'}} className="mt-24 image1" src="https://prod-nandan.s3.ap-south-1.amazonaws.com/website/home/images/bannerImg.svg"/>
        </div>
        
    </div>
  );
};

export default Home;
