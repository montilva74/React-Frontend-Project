import Router from './Routes/Router'
import Navbar from './Componentes/Navbar/Navbar'

import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp } from "reactfire";


function App() {

  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <>
      <FirestoreProvider sdk={firestoreInstance}>
        <Router>
          <Navbar></Navbar>
        </Router>
      </FirestoreProvider>
    </>
  );
}

export default App;
