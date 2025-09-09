# Firebase Integration Guide

## Overview
This guide explains how to use Firebase in the Arun Portfolio project. The Firebase configuration is already set up in `src/firebase.js`, and this document provides examples of how to fetch data from Firestore and interact with Firebase Storage.

## Firebase Services Available
- **Firestore Database**: For storing and retrieving structured data
- **Firebase Storage**: For storing files like images and videos
- **Firebase Authentication**: For user authentication (if needed)
- **Firebase Analytics**: For tracking user interactions

## How to Fetch Data from Firestore

### 1. Import the necessary functions
```javascript
import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc, query, where, orderBy, limit } from 'firebase/firestore';
```

### 2. Fetch all documents from a collection
```javascript
const fetchAllDocuments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'your-collection-name'));
    const documents = [];
    
    querySnapshot.forEach((doc) => {
      documents.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return documents;
  } catch (err) {
    console.error('Error fetching documents: ', err);
    throw err;
  }
};
```

### 3. Fetch a single document by ID
```javascript
const fetchSingleDocument = async (documentId) => {
  try {
    const docRef = doc(db, 'your-collection-name', documentId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (err) {
    console.error('Error fetching document: ', err);
    throw err;
  }
};
```

### 4. Fetch documents with query (filtering, ordering, limiting)
```javascript
const fetchDocumentsWithQuery = async () => {
  try {
    // Create a query against the collection
    const q = query(
      collection(db, 'your-collection-name'),
      where('field', '==', 'value'),  // Filter by field
      orderBy('createdAt', 'desc'),   // Order by date
      limit(10)                       // Limit to 10 documents
    );
    
    const querySnapshot = await getDocs(q);
    const documents = [];
    
    querySnapshot.forEach((doc) => {
      documents.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return documents;
  } catch (err) {
    console.error('Error fetching documents with query: ', err);
    throw err;
  }
};
```

## How to Use Firebase Storage

### 1. Import the necessary functions
```javascript
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
```

### 2. Upload a file to Firebase Storage
```javascript
const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (err) {
    console.error('Error uploading file: ', err);
    throw err;
  }
};
```

### 3. Get a download URL for a file
```javascript
const getFileURL = async (path) => {
  try {
    const fileRef = ref(storage, path);
    const url = await getDownloadURL(fileRef);
    
    return url;
  } catch (err) {
    console.error('Error getting file URL: ', err);
    throw err;
  }
};
```

### 4. List all files in a directory
```javascript
const listFiles = async (directoryPath) => {
  try {
    const directoryRef = ref(storage, directoryPath);
    const fileList = await listAll(directoryRef);
    
    const files = [];
    
    // Get URLs for all items
    for (const item of fileList.items) {
      const url = await getDownloadURL(item);
      files.push({
        name: item.name,
        fullPath: item.fullPath,
        url: url
      });
    }
    
    return files;
  } catch (err) {
    console.error('Error listing files: ', err);
    throw err;
  }
};
```

### 5. Using the Storage Utility Functions (Method 1)

For a more reusable approach, you can use the utility functions in `src/utils/storageUtils.js`:

```javascript
import { getImageURL, constructImagePath } from '../../utils/storageUtils';

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
};
```

## Example Components
- Check out the `FirebaseExample.js` component for a working example of how to fetch and display data from Firestore.
- See `ImageUrlExample.js` for a complete example of generating image URLs from Firebase Storage.

## Best Practices
1. Always handle errors properly with try/catch blocks
2. Use loading states to indicate when data is being fetched
3. Consider implementing caching for frequently accessed data
4. Use Firebase security rules to protect your data
5. Keep sensitive operations on the server side when possible
6. When storing image references in Firestore, store the full download URL rather than just the path

## Troubleshooting
- If you encounter CORS issues with Firebase Storage, make sure your Firebase Storage rules are properly configured
- If data isn't loading, check the console for errors and verify your collection names
- For authentication issues, ensure the authentication method is enabled in the Firebase console