import './App.css';
import { useState} from 'react'
import axios from 'axios'

function App() {
  const [image, setImage] = useState()
  const imageChange = () => {
    axios.get(
      "https://api.generated.photos/api/v1/faces?api_key=0BKCehRCt2G5OZyqFqFmnA&order_by=random"
    )
    .then(res => {
      const uri = res.data.faces[0].urls[4][512] 
      uri && setImage(uri)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
  return (
    <div className="app">
    <h2>AI Photograph Generator</h2>
    {image && <img src={image} alt='face' />}
    <button type='button' onClick ={imageChange}>Change Image</button>
    </div>
  );
}

export default App;
