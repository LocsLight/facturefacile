import React, {useState, useEffect} from 'react';

const FactureContext = React.createContext()

const FactureProvider = ({children}) => {

    const [factures, setFactures] = useState([]);

    useEffect(() => {
        setFactures(JSON.parse(localStorage.getItem('portexe-factures')) || [])
    }, [setFactures]);

    useEffect(() => {
        console.log(factures)
    },[factures]);

    const updateFactures = (facture) => {
        const updatedFactures = [
            ...factures,
            facture
        ]
        localStorage.setItem('protexe-factures', JSON.stringify(updatedFactures))
        setFactures(updatedFactures)
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
