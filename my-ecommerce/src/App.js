import Router from './Routes/Router'
import Navbar from './Componentes/Navbar/Navbar'


import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { useState } from 'react';


function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());

  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={ isDarkMode ? 'dark_mode' : 'light_mode' }>
      <FirestoreProvider sdk={firestoreInstance}>
        <Router>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
        </Router>
      </FirestoreProvider>
    </div>
  );
}

export default App;
