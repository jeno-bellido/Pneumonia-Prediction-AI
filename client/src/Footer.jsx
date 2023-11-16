import React from 'react'
// ScrollLink [npm install react-scroll, clicking it will redirect to a section with specified id]
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
  return (
   <>
    <div id='footer' className=' d-flex justify-content-center align-items-center' style={{borderTop: '1px solid #323131'}} >
      <div className='mt-3 d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>
      
        <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-start p-lg-4 p-4 ' >

        <div className='col-lg-4 col-md-4 col-12 '>
        <div className='d-flex flex-column text-center align-items-center justify-content-center'>
        <p className='logo m-0' style={{fontWeight: '900', fontSize: '30px', background: 'linear-gradient(to bottom, #83b1c9, #336182)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} >PS</p>
        </div>       
        </div>

        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center py-lg-0 py-md-0 py-5'>
        <div className='d-flex gap-3 text-center align-items-center justify-content-center'>
        <ScrollLink to="about" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >About</p>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >Contact</p>
        </ScrollLink>
        </div>       
        </div>


        <div className='col-lg-4 col-md-4 col-12  d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-3 text-center align-items-center justify-content-center'>
        <div >
          <p className='logo m-0' style={{fontWeight: 'bold', fontSize: '20px', color: '#323131'}} > <i className='bi-github'></i> </p>
        </div>
        <div >
          <p className='logo m-0' style={{fontWeight: 'normal', fontSize: '20px', color: '#323131'}} ><i className='bi-facebook'></i> </p>
        </div>
        <div >
          <p className='logo m-0' style={{fontWeight: 'normal', fontSize: '20px', color: '#323131'}} ><i className='bi-linkedin'></i> </p>
        </div>
        </div>       
        </div>

        </div>

        <div className='d-flex col-12 justify-content-center align-items-center text-center p-lg-4 p-4 ' >
        📋 2023 © PNEUMUSCAN • All Rights Reserved.
        </div>
        </div>
    </div>
    
   </>
  )
}

export default Footer