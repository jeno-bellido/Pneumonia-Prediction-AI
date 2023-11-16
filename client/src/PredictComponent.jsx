import React, { useState } from 'react';
import axios from 'axios';
import defaultImage from '/src/default.jpeg';


const PredictComponent = () => {
    const [prediction, setPrediction] = useState('');
    const [positive, setPositive] = useState('');
    const [negative, setNegative] = useState('');
    const [showAnalysis, setShowAnalysis] = useState(false);
        // Add a new state variable for loading
        const [loading, setLoading] = useState(false);


    const [selectedFile, setSelectedFile] = useState(null); // Initialize with null
    // Set a default image URL
    const [imageUrl, setImageUrl] = useState(defaultImage);

    const onFileChange = async event => {
        const file = event.target.files[0];
        setSelectedFile(file);
    
        // Display the selected image
        const url = URL.createObjectURL(file);
        setImageUrl(url);
    
        // Automatically upload the file after it's selected
        await onFileUpload(file);
    };
    
    const onFileUpload = async file => {
        const formData = new FormData();
        formData.append('file', file || selectedFile);

        // Set loading to true when starting the request
        setLoading(true);

        try {
            const response = await axios.post('https://pneumoscan-server.onrender.com/predict', formData);
            setPrediction(response.data.Prediction);
            setPositive(response.data.Positive);
            setNegative(response.data.Negative);
        } catch (error) {
            console.error(`Error: ${error}`);
        } finally {
            // Set loading to false when the request is completed (success or error)
            setLoading(false);
        }

        setShowAnalysis(true); // Set to true when an image is uploaded
    };


    return (
        <>
        <div className='d-flex justify-content-center align-items-center p-3 mt-5'>
            <div className='container d-flex justify-content-center align-items-center '>
                <div className='d-flex col-12 row flex-lg-row flex-column justify-content-lg-center '>

                    <div className='col-lg-6 col-md-12 px-lg-4 px-0' >
                        <div className='text-lg-start text-center'>
                            <p className='mb-1 name' style={{fontWeight: '800', fontSize: '70px', background: 'linear-gradient(to bottom, #83b1c9, #336182)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent', lineHeight: '1'}} >Pneumonia Scanner</p>
                            <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} > Welcome to PneumoScan. This model is not a substitute for professional medical advice. For the most accurate assessment, consult with a healthcare professional. </p>
                        </div>

                        <div className='w-100 mt-lg-4 my-4 my-lg-0 d-flex justify-content-lg-start justify-content-center text-lg-start text-center ' >
                            <label htmlFor="fileInput"  style={{ cursor: 'pointer', fontWeight: 'bold', padding: '50px 90px', backdropFilter: 'blur(10px)', backgroundImage: 'url("x-ray.gif")', color: 'white', borderRadius: '5px', border: '1px solid #737373', }}>
                            <i className='bi bi-upload fw-bold'></i>  Upload File
                            </label>
                            <input type="file" id="fileInput" onChange={onFileChange} style={{ display: 'none' }} />
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 px-lg-4' >
                        <div className=' d-flex justify-content-lg-start justify-content-center'>
                        {loading ? (
                            // Display loading text instead of the previous message
                            <p>The model is analyzing the image...</p>
                        ) : (
                            // Display the uploaded image
                            <img className='rounded shadow' src={imageUrl} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '300px' }} />
                        )}
                        </div>


                        {showAnalysis ? (
                        <div className='my-4 analysis'>
                            <p className='m-0 description text-lg-start text-center' style={{fontWeight: 'bold', fontSize: '16px', color: '#323131'}} > X-ray Analysis </p>
                            <p className='mt-4 text-lg-start text-center'>
                                {/* Display result message when data is received */}
                                The model estimates a <b> {positive * 100}% </b> probability that the X-ray shows signs of pneumonia, and a <b> {negative * 100}% </b> probability that it does not show any signs of pneumonia.
                            </p>
                        </div>
                    ) : null /* Do not display initial message when loading */}
                        

                    </div>

                </div>
            </div>
        </div>
        <br /><br /><br />

        </>
    );
};

export default PredictComponent;
