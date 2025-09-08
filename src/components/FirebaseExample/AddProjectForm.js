import React, { useState } from 'react';
import { db, storage } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './FirebaseExample.css';

function AddProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    tags: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Process tags into an array
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');

      let imageUrl = null;

      // Upload image if one is selected
      if (image) {
        const storageRef = ref(storage, `projects/${Date.now()}_${image.name}`);
        const uploadResult = await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(uploadResult.ref);
      }

      // Add document to Firestore
      await addDoc(collection(db, 'projects'), {
        title: formData.title,
        description: formData.description,
        link: formData.link,
        tags: tagsArray,
        imageUrl: imageUrl,
        createdAt: serverTimestamp()
      });

      // Reset form
      setFormData({
        title: '',
        description: '',
        link: '',
        tags: ''
      });
      setImage(null);
      setSuccess(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (err) {
      console.error('Error adding project: ', err);
      setError('Failed to add project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="firebase-example">
      <h2>Add New Project</h2>
      
      {success && (
        <div className="success-message">
          Project added successfully!
        </div>
      )}
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-group">
          <label htmlFor="title">Project Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="link">Project Link</label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="tags">Tags (comma separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="video, editing, motion graphics"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Project Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(image)} alt="Preview" />
            </div>
          )}
        </div>
        
        <button 
          type="submit" 
          className="submit-button" 
          disabled={loading}
        >
          {loading ? 'Adding Project...' : 'Add Project'}
        </button>
      </form>
    </div>
  );
}

export default AddProjectForm;