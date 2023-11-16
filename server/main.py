from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
from PIL import Image
import io

app = FastAPI()

# Add CORS middleware
origins = [
    "https://pneumoscanai.onrender.com",  # React app
    # add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
model = load_model('my_model.h5')

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Read the image file
    image_data = await file.read()
    img = Image.open(io.BytesIO(image_data)).convert('RGB').resize((64, 64))

    # Preprocess the image for prediction
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img.astype('float32') / 255

    # Make a prediction
    prediction = model.predict(img)

    # Extract the prediction value from the 2D array and convert it to a Python float
    prediction_value_positive = float(prediction[0][0])
    prediction_value_negative = 1 - prediction_value_positive

    print("Prediction Value:", prediction_value_positive, prediction_value_negative)
    if prediction_value_positive > 0.5:
        return {
            "Prediction": "Positive ",
            "Positive": prediction_value_positive,
            "Negative": prediction_value_negative,
        }
    else:
        return {
            "Prediction": "Negative",
            "Negative": prediction_value_negative,
            "Positive": prediction_value_positive,
            }


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
