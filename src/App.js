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
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
