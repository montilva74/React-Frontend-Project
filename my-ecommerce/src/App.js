import Router from './Routes/Router'
import Navbar from './Componentes/Navbar/Navbar'


import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { useState } from 'react';


function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());

  let initialDarkMode = localStorage.getItem("darkMode")
  
  if (initialDarkMode == null || initialDarkMode === undefined) {
    initialDarkMode = false
    localStorage.setItem("darkMode", false)
  }

  const [isDarkMode, setIsDarkMode] = useState( initialDarkMode === 'true' )

  const toggleDarkMode = ( value ) => {
    setIsDarkMode(value)
    localStorage.setItem("darkMode", value)
  }

  return (
    <div className={ isDarkMode ? 'dark_mode' : 'light_mode' }>
      <FirestoreProvider sdk={firestoreInstance}>
        <Router>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}></Navbar>
        </Router>
      </FirestoreProvider>
    </div>
  );
}

export default App;
