import { storage } from '../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

/**
 * Generates a download URL for an image stored in Firebase Storage
 * @param {string} imagePath - The path to the image in Firebase Storage (e.g., 'projects/image1.jpg')
 * @returns {Promise<string>} - A promise that resolves to the download URL
 */
export const getImageURL = async (imagePath) => {
  try {
    // Create a reference to the file using the storage bucket from config
    const fileRef = ref(storage, imagePath);
    
    // Get the download URL
    const url = await getDownloadURL(fileRef);
    
    return url;
  } catch (err) {
    console.error('Error getting image URL:', err);
    throw err;
  }
};

/**
 * Constructs a complete image path using a folder and filename
 * @param {string} folder - The folder in Firebase Storage (e.g., 'projects')
 * @param {string} filename - The filename (e.g., 'image1.jpg')
 * @returns {string} - The complete path to use with getImageURL
 */
export const constructImagePath = (folder, filename) => {
  // Ensure folder doesn't have trailing slash
  const cleanFolder = folder.endsWith('/') ? folder.slice(0, -1) : folder;
  
  // Ensure filename doesn't have leading slash
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
  
  return `${cleanFolder}/${cleanFilename}`;
};