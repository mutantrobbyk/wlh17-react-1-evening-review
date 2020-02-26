import React from 'react';
import './App.css';
import CoverImage from './components/CoverImage'
import FidgetClicker from './components/FidgetClicker'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <div className="App">
      <CoverImage/>
      <FidgetClicker/>
      <FriendsList/>
    </div>
  );
}

export default App;
