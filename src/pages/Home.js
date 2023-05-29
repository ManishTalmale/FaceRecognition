import React, { useState } from 'react';
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecogntion/FaceRecognition';



const PAT = '1118f36c7e4d4908b552f1c8cf728ba9';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'p4aue6ghxmgs';       
const APP_ID = 'face-recognition';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';

// const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg"


function Home() {
const [input,setInput]=useState('')
const[searchImg,setSearch]=useState('')
const [box,setBox]=useState({})
const onInputChange = (event) => {
setInput(event.target.value);
}

const calculateFaceLocation=(data)=>{
const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById('inputimage');
const width = Number(image.width);
const height = Number(image.height);
return {
leftCol: clarifaiFace.left_col * width,
topRow: clarifaiFace.top_row * height,
rightCol: width - (clarifaiFace.right_col * width),
bottomRow: height - (clarifaiFace.bottom_row * height)
}
}
const displayFaceBox = (box) => {
setBox(box)
}
const onButtonSubmit = () => { 

setInput(setSearch(input))

const raw = JSON.stringify({
"user_app_id": {
  "user_id": USER_ID,
  "app_id": APP_ID
},
"inputs": [
  {
      "data": {
          "image": {
              "url":input
          }
      }
  }
]
});

const requestOptions = {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Authorization': 'Key ' + PAT
},
body: raw
};

fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
.then((response) => response.json())
.then(response => displayFaceBox(calculateFaceLocation(response)))
.catch(error => console.log('error', error));

}

return (
<div> 
<Navigation/>
 <Rank />
 <ImageLinkForm onInputChange= {onInputChange} onButtonSubmit = {onButtonSubmit}/>
 <FaceRecognition searchImg={searchImg} box={box} />
{/* <SignIn/> */}
</div>

);
}

export default Home;
