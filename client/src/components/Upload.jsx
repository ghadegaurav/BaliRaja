import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const webcamRef = useRef(null);

  const onFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL('');
    }
  };

  const captureFromCamera = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPreviewURL(imageSrc);
  };

  return (
    <div>
      <h3>Image Upload / Capture</h3>
      <div>
        <input type="file" accept="image/*" onChange={onFileChange} />
        <button onClick={captureFromCamera}>Capture from Camera</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          height={240}
          style={{ display: 'none' }}
        />
      </div>
      {selectedFile && (
        <div>
          <h4>Selected Image:</h4>
          <img src={previewURL} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default Upload;
