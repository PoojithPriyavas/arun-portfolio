import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import ImageUrlExample from './components/FirebaseExample/ImageUrlExample';
import FirebaseImageGallery from './components/FirebaseExample/FirebaseImageGallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image-url-example" element={<ImageUrlExample />} />
          <Route path="/image-gallery" element={<FirebaseImageGallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
