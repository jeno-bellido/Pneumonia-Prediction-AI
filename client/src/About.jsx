import React from 'react'

function About() {
    return (
        <>

<div className='d-flex justify-content-center align-items-center p-3 mt-5' id='about'>
            <div className='container d-flex justify-content-center align-items-center '>
                <div className='d-flex col-12 row flex-lg-row flex-column justify-content-lg-center '>

                <p className='mb-5 name px-lg-4 text-lg-start text-center' style={{fontWeight: '800', fontSize: '70px', background: 'linear-gradient(to bottom, #83b1c9, #336182)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent', lineHeight: '1'}} >About</p>

                    <div className='col-lg-6 col-md-12 px-lg-4 ' >
                            <div className='text-lg-start text-center'>
                                <div className=''>
                                    <p className='m-0 description text-lg-start text-center' style={{fontWeight: 'bold', fontSize: '20px', color: '#323131'}} > 📊 Model </p>
                                    <p className=' text-lg-start text-center'> The pneumonia prediction model in this FastAPI app was developed using a Convolutional Neural Network (CNN). CNNs excel in image tasks, leveraging convolutional and pooling layers to autonomously capture intricate spatial features from input images. </p>
                                </div>

                                <div className=''>
                                    <p className='m-0 description text-lg-start text-center' style={{fontWeight: 'bold', fontSize: '20px', color: '#323131'}} > 📈 Dataset </p>
                                    <p className=' text-lg-start text-center'> The dataset utilized for both training and testing the model originates from Kaggle and is accessible at the following link: <a href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia"> Kaggle Chest X-ray Pneumonia Dataset </a> </p>
                                </div>

                            </div>
                    </div>

                    <div className='col-lg-6 col-md-12 px-lg-4' >
                    <div className=''>
                        <p className='m-0 description text-lg-start text-center' style={{fontWeight: 'bold', fontSize: '20px', color: '#323131'}} > 🎯 Accuracy </p>
                        <p className=' text-lg-start text-center'> <b> loss: 0.2115: </b>  a measure of how well the model is performing, with lower values indicating better performance. In this case, the model’s loss is 0.2115.
                        <b> accuracy: 0.9042:</b>  This is the accuracy of the model on the training data. An accuracy of 0.9042 means the model correctly predicted the outcome about 90.42% of the time.</p>
                    </div>

                    <div className=''>
                        <p className='m-0 description text-lg-start text-center' style={{fontWeight: 'bold', fontSize: '20px', color: '#323131'}} > 🚫 Disclaimer </p>
                        <p className=' text-lg-start text-center'>Please be aware that although our model strives to provide accurate predictions, it is not infallible, and there is a possibility of false positives or false negatives.  For a comprehensive assessment of your health, we strongly recommend consulting with a healthcare professional. </p>
                    </div>
                    </div>

                </div>
            </div>
        </div>

        <br /><br /><br />

        </>
    );}

export default About