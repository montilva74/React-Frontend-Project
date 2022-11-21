import React from "react";

import { doc, collection, query, orderBy } from "firebase/firestore";
import { useFirestoreDocData, useFirestore, useFirestoreCollectionData } from "reactfire";

export const Favoritos = () => {
    
    // Sirve para obtener los datos de UN elemento de la DB usando su ID
    // creo el Doc -> llamo a Firestore usando el Doc -> data
    const userDoc = doc(useFirestore(), "users", "xuDDzH879RDoA1JaOgd5");
    const { userStatus, data:user } = useFirestoreDocData(userDoc, {
        idField: 'id',
    });

    // Sirve para obtener los datos de TODOS los elementos de la DB
    // creo la Coleccion -> Consulta -> llamo a Firestore usando la Consulta -> data
    const usersCollection = collection(useFirestore(), 'users');
    const usersQuery = query(usersCollection, orderBy('name', 'asc'));
    const { usersStatus, data:users } = useFirestoreCollectionData(usersQuery, {
        idField: 'id',
    });


    if (userStatus === "loading") {
        return <p>Recibiendo info de Usuario</p>;
    }

    if (usersStatus === "loading") {
        return <p>Recibiendo datos de los Usuarios</p>;
    }

    return (
        <>
            <h1> Un usuario en concreto: </h1>
            <p>
                El usuario es { user?.name }
            </p>

            <hr />

            <h1> Lista de Usuarios </h1>
            <ul>
                { users?.map( (u) => {
                    return ( <li key={u.id}> { u?.name } </li> )
                })}
            </ul>

        </>
    );
};
