import React, { useState, useEffect } from 'react';
import { getImageURL } from '../../utils/storageUtils';
import '../FirebaseExample/FirebaseExample.css';
import './FirebaseImageGallery.css';

function FirebaseImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample image paths - in a real app, these would come from Firestore
  const sampleImagePaths = [
    'projects/sample1.jpg',
    'projects/sample2.jpg',
    'projects/sample3.jpg',
    'projects/portfolio1.jpg',
    'projects/portfolio2.jpg',
  ];

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const imagePromises = sampleImagePaths.map(async (path) => {
          try {
            const url = await getImageURL(path);
            return {
              path,
              url,
              error: null
            };
          } catch (err) {
            console.error(`Error loading image ${path}:`, err);
            return {
              path,
              url: null,
              error: `Failed to load image: ${path}`
            };
          }
        });

        const results = await Promise.all(imagePromises);
        setImages(results);
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Failed to load images from Firebase Storage');
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="firebase-example">
      <h2>Firebase Storage Image Gallery</h2>
      <p>Displaying images directly from Firebase Storage</p>

      {loading && <div className="loading">Loading images from Firebase Storage...</div>}
      
      {error && <div className="error-message">{error}</div>}

      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            {image.url ? (
              <>
                <img 
                  src={image.url} 
                  alt={`Firebase Storage image ${index + 1}`} 
                  className="gallery-image"
                />
                <div className="image-info">
                  <p>Path: {image.path}</p>
                </div>
              </>
            ) : (
              <div className="image-error">
                <p>{image.error || 'Failed to load image'}</p>
                <p>Path: {image.path}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="data-section">
        <h3>How to Use Firebase Storage Images in Your Portfolio</h3>
        <pre className="code-example">
{`// 1. Import the utility function
import { getImageURL } from '../../utils/storageUtils';

// 2. Create a state to store the image URL
const [imageUrl, setImageUrl] = useState('');

// 3. Load the image URL from Firebase Storage
useEffect(() => {
  const loadImage = async () => {
    try {
      const url = await getImageURL('projects/your-image.jpg');
      setImageUrl(url);
    } catch (err) {
      console.error('Error loading image:', err);
    }
  };
  
  loadImage();
}, []);

// 4. Use the image URL in your component
return (
  <div>
    {imageUrl && <img src={imageUrl} alt="Portfolio image" />}
  </div>
);`}
        </pre>
      </div>
    </div>
  );
}

export default FirebaseImageGallery;