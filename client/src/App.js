import {useRef, useState, useEffect} from 'react';
import './App.css';
import background from './images/background.jpeg';
import {uploadFile} from './services/api';

function App() {
  const [file, setFile] =useState('');
  const [result, setResult] = useState("");
  const fileInputRef =useRef();

  useEffect(() => {
    const getImage = async() => {
      if (file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

       let response= await uploadFile(data);
       setResult(response.path);

      }

    }
    getImage();
  }, [file]) 
  const onUploadCLick = () =>{
    fileInputRef.current.click();
  }

  return (
    
    <div className= 'conatiner'>
      <img src={background} alt="banner" />
      <div className='wrapper'>
      <h1>blisfull file sharing</h1>
      <p>uploade and share file</p>

      <button onClick={() => onUploadCLick()}>Upload</button>
      <input type="file"
      ref={fileInputRef}
      style={{display: 'none'}}
      onChange={(e) => setFile(e.target.files[0])}
      />

      <a href= {result} target= "_blank">{result}</a>
      </div> 
      </div>
  );
}

export default App;
