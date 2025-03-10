import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import LanguageSelector from './components/LanguageSelector';
import ActiveMembers from './components/ActiveMembers';
import Post from './components/Post/Post.jsx';
import Footer from './components/Footer/Footer.jsx';
import AddPostForm from './components/Form/AddPostForm.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <h1 className="learning-title">Learning</h1>
                <LanguageSelector />
                <ActiveMembers />
                <div className='posts-container'>
                 <Post/>
                </div>
                <Footer />
              </>
            } 
          />
          <Route path="/add-post" element={<AddPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



/*import React from 'react'

import './App.css'
import AudioRecorder from './components/AudioRecorder';


const App = () => {
  return (
    <div className="app">
      <AudioRecorder />
    </div>
  );
};

export default App */
