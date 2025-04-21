import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';

const UploadcareFileUpload = () => {
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = (fileInfo) => {
    setFileUrl(fileInfo.cdnUrl);
  };

  return (
    <div>
      <h2>Upload File</h2>
      <Widget publicKey={process.env.UPLOADCARE_PUBLIC_KEY} onChange={handleFileChange} />
      {fileUrl && (
        <div>
          <p>File uploaded successfully:</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadcareFileUpload;
