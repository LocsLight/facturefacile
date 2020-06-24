import React, {useState} from 'react';

const FactureContext = React.createContext()

const FactureProvider = ({children}) => {

    const [factures, setFactures] = useState([]);

    const updateFactures = (facture) => {
        console.log(facture)
    }

    return (
        <FactureContext.Provider value={{
            factures, 
            updateFactures}}>
           {children}
        </FactureContext.Provider>
    )
}

export  {
    FactureContext, 
    FactureProvider
};
