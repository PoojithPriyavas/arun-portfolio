import React, { useState } from 'react';
import { getImageURL, constructImagePath } from '../../utils/storageUtils';
import '../FirebaseExample/FirebaseExample.css';

function ImageUrlExample() {
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [folder, setFolder] = useState('projects');
  const [filename, setFilename] = useState('example-image.jpg');

  const handleGetImageURL = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Construct the image path using the utility function
      const imagePath = constructImagePath(folder, filename);
      
      // Get the image URL using the utility function
      const url = await getImageURL(imagePath);
      
      setImageURL(url);
    } catch (err) {
      console.error('Error getting image URL:', err);
      setError('Failed to get image URL. Make sure the image exists in Firebase Storage.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="firebase-example">
      <h2>Firebase Storage Image URL Generator</h2>
      
      <div className="data-section">
        <h3>Generate Image URL</h3>
        
        <div className="form-group">
          <label htmlFor="folder">Storage Folder:</label>
          <input
            type="text"
            id="folder"
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
            placeholder="e.g., projects"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="filename">Image Filename:</label>
          <input
            type="text"
            id="filename"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            placeholder="e.g., image1.jpg"
          />
        </div>
        
        <button 
          onClick={handleGetImageURL}
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Generate Image URL'}
        </button>
        
        {error && <p className="error-message">{error}</p>}
        
        {imageURL && (
          <div className="image-preview">
            <h4>Generated URL:</h4>
            <pre className="url-display">{imageURL}</pre>
            
            <h4>Image Preview:</h4>
            <img src={imageURL} alt="Generated from Firebase Storage" />
            
            <h4>How to use this URL:</h4>
            <pre className="code-example">
              {`// In your React component:
<img src="${imageURL}" alt="My image" />

// In CSS:
background-image: url('${imageURL}');`}
            </pre>
          </div>
        )}
      </div>
      
      <div className="data-section">
        <h3>Code Example</h3>
        <pre className="code-example">
          {`import { getImageURL, constructImagePath } from '../../utils/storageUtils';

// Example 1: Get URL with complete path
const getCompleteImageURL = async () => {
  try {
    const url = await getImageURL('projects/image1.jpg');
    console.log('Image URL:', url);
    return url;
  } catch (err) {
    console.error('Error:', err);
  }
};

// Example 2: Construct path and get URL
const getConstructedImageURL = async () => {
  try {
    const imagePath = constructImagePath('projects', 'image1.jpg');
    const url = await getImageURL(imagePath);
    console.log('Image URL:', url);
    return url;
  } catch (err) {
    console.error('Error:', err);
  }
};`}
        </pre>
      </div>
    </div>
  );
}

export default ImageUrlExample;