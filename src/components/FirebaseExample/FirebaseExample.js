import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc, query, where, orderBy, limit } from 'firebase/firestore';
import './FirebaseExample.css';

function FirebaseExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [singleDocument, setSingleDocument] = useState(null);

  // Example 1: Fetch all documents from a collection
  const fetchAllDocuments = async () => {
    console.log("calling the data")
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'project'));
      const documents = [];

      querySnapshot.forEach((doc) => {
        documents.push({
          id: doc.id,
          ...doc.data()
        });
      });

      setData(documents);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching documents: ', err);
      setError('Failed to fetch documents');
      setLoading(false);
    }
  };

  // Example 2: Fetch a single document by ID
  const fetchSingleDocument = async (documentId) => {
    try {
      setLoading(true);
      const docRef = doc(db, 'project', documentId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSingleDocument({
          id: docSnap.id,
          ...docSnap.data()
        });
      } else {
        console.log('No such document!');
        setSingleDocument(null);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching document: ', err);
      setError('Failed to fetch document');
      setLoading(false);
    }
  };

  // Example 3: Fetch documents with query (filtering, ordering, limiting)
  const fetchDocumentsWithQuery = async () => {
    try {
      setLoading(true);
      // Create a query against the collection
      const q = query(
        collection(db, 'project'),
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

      setData(documents);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching documents with query: ', err);
      setError('Failed to fetch documents with query');
      setLoading(false);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    // Uncomment the function you want to use
    fetchAllDocuments();
    // fetchSingleDocument('document-id-here');
    // fetchDocumentsWithQuery();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="firebase-example">
      <h2>Firebase Data Example</h2>

      {/* Display all documents */}
      <div className="data-section">
        <h3>All Documents</h3>
        {data.length > 0 ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <strong>ID:</strong> {item.id}
                <pre>{JSON.stringify(item, null, 2)}</pre>
              </li>
            ))}
          </ul>
        ) : (
          <p>No documents found</p>
        )}
      </div>

      {/* Display single document */}
      {singleDocument && (
        <div className="data-section">
          <h3>Single Document</h3>
          <div>
            <strong>ID:</strong> {singleDocument.id}
            <pre>{JSON.stringify(singleDocument, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirebaseExample;