import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'; 

// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'
// ScrollLink [npm install react-scroll, clicking it will redirect to a section with specified id]
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center '>
    <div className='d-flex justify-content-between p-lg-5 p-4' style={{height: '100px', width: '100%'}}>

      <div className='d-flex align-items-center justify-content-center'>
        <p className='logo m-0' style={{fontWeight: '900', fontSize: '30px', background: 'linear-gradient(to bottom, #83b1c9, #336182)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right">PS</p>
      </div>

      <div className='d-lg-flex d-md-flex d-none align-items-center justify-content-center gap-5'>
        <ScrollLink to="about" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="200">About</p>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="800">Contact</p>
        </ScrollLink>

     </div>

     <div className=' align-items-center justify-content-center gap-3 d-lg-none d-md-none d-flex'>

     <ScrollLink to="about" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="200">About</p>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="800">Contact</p>
        </ScrollLink>
    </div>



    </div>
    </div>

    </>
  )
}

export default NavBar