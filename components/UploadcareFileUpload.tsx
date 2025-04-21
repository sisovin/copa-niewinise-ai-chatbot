import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';

const UploadcareFileUpload = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [fileDescription, setFileDescription] = useState('');

  const handleFileChange = (fileInfo) => {
    setFileUrl(fileInfo.cdnUrl);
  };

  const handleDescriptionChange = (e) => {
    setFileDescription(e.target.value);
  };

  return (
    <div>
      <h2>Upload File</h2>
      <Widget publicKey={process.env.UPLOADCARE_PUBLIC_KEY} onChange={handleFileChange} />
      <div>
        <label htmlFor="fileDescription">File Description:</label>
        <input
          type="text"
          id="fileDescription"
          value={fileDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      {fileUrl && (
        <div>
          <p>File uploaded successfully:</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
          <p>Description: {fileDescription}</p>
        </div>
      )}
    </div>
  );
};

export default UploadcareFileUpload;
