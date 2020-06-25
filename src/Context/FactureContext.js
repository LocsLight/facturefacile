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

    const editFacture = (factureToUpdate) => {
        const filteredFacture = factures.filter((facture) => facture.title !== factureToUpdate.title)
        const updatedFactures = [...filteredFacture, factureToUpdate]
        localStorage.setItem('protexe-factures', JSON.stringify(updatedFactures))
        setFactures(updatedFactures)
    }

    return (
        <FactureContext.Provider value={{
            factures, 
            updateFactures,
            editFacture}}>
           {children}
        </FactureContext.Provider>
    )
}

export  {
    FactureContext, 
    FactureProvider
};
