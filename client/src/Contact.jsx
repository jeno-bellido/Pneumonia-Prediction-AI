import React from 'react'

function Contact() {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center p-3 mt-5' id='contact'>
            <div className='container d-flex justify-content-center align-items-center '>
                <div className='d-flex col-12 row flex-lg-row flex-column justify-content-lg-center '>

                <p className='mb-5 name px-lg-4 text-lg-start text-center' style={{fontWeight: '800', fontSize: '70px', background: 'linear-gradient(to bottom, #83b1c9, #336182)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent', lineHeight: '1'}} >Get in Touch</p>

                    <div className='col-lg-6 col-md-12 px-lg-4 ' >
                            <div className='text-lg-start text-center'>
                                <div>
                                    <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} > Let's build the web together. You can contact me in the following plaforms! 🌐💻</p>
                                </div>
                                <div className='mt-5'>
                                    <p className=' text-lg-start text-center'> ✅ Collaboratively work towards creating a positive societal impact by combining our strengths and expertise. </p>
                                </div>

                                <div className=''>
                                    <p className=' text-lg-start text-center'> ✅ Collaboratively work towards creating a positive societal impact by combining our strengths and expertise.  </p>
                                </div>

                            </div>
                    </div>

                    <div className='col-lg-6 col-md-12 px-lg-4' >
                    <div className=' contact text-lg-start text-center'>
        <img src="email.png" alt="" style={{objectFit: 'cover', width: '50px', height: 'auto'}} data-aos="fade-right" data-aos-delay="200"/>
        <p className='mt-1 p-0 m-0 ' style={{fontWeight: 'bold', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="400"> 
            Email
        </p>
        <p className='' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="600"> 
        Feel free to reach out to me via email: <b> <a href = "mailto: jeno.bellido@wvsu.edu.ph"> jeno.bellido@wvsu.edu.ph </a> </b>
        </p>

        </div>

        <div className=' contact text-lg-start text-center'>
        <img src="instagram.png" alt="" style={{objectFit: 'cover', width: '50px', height: 'auto'}} data-aos="fade-right" data-aos-delay="800" />
        <p className='mt-1 p-0 m-0' style={{fontWeight: 'bold', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1000"> 
            Instagram
        </p>
        <p className='' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1200"> 
            Let's connect on Instagram: <b> <a target='_blank' href = "https://www.instagram.com/jjeennnooo/"> @jnblld </a> </b>
        </p>
        </div>

        <div className=' contact text-lg-start text-center'>
        <img src="linkedin.png" alt="" style={{objectFit: 'cover', width: '50px', height: 'auto'}} data-aos="fade-right" data-aos-delay="1400"/>
        <p className='mt-1 p-0 m-0 description' style={{fontWeight: 'bold', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1600"> 
            Linkedin
        </p>
        <p className=' ' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1800"> 
        Connect with me on LinkedIn:  <b> <a target='_blank' href = "https://www.linkedin.com/in/jeno-bellido-079221218/"> JENO BELLIDO </a> </b>
        </p>

        </div>
                    </div>

                </div>
            </div>
        </div>

    <br /><br /><br />
    </>
  )
}

export default Contact