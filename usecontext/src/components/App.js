import React, { useState, useRef, createContext } from 'react';
import ComponentA from './ComponentA';
import ComponentE from './ComponentE';
import '../styles.css';
import userInfo from '../userInfo';
import DataContext from '../context/DataContext';

// GENERIC IMAGE PLACEHOLDER
const avatarGeneric =
  'https://res.cloudinary.com/jkeohan/image/upload/v1601931025/avatar_wuijmx.png';
const avatarRobot =
  'https://res.cloudinary.com/jkeohan/image/upload/v1601989471/avatar-robot_iqcq4k.png';

function App() {
  const [userData, setUserData] = useState(userInfo);
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = inputRef.current.value;
    setUserData({
      ...userData,
      avatar: url
    });
    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <h2>React Context - useContext Hook</h2>
      <h3>This is App</h3>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="update avatar url" />
        <button>Submit</button>
      </form>
      <br />
      <DataContext.Provider value={{}}>
        <ComponentA userData={userData} />
      <hr />
      <ComponentE userData={userData} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
