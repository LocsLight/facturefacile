import React, {useState, useEffect} from 'react';

const FactureContext = React.createContext()

const FactureProvider = ({children}) => {

    const [factures, setFactures] = useState([]);
    const [selectedCostInterval, setSelectedCostInterval] = useState('mois')

    useEffect(() => {
        setFactures(JSON.parse(localStorage.getItem('portexe-factures')) || [])
    }, [setFactures]);

    useEffect(() => {
        console.log(factures)
    },[factures]);

    const ordreAlphabetique = (factures) => {
        return factures.sort((a,b) =>
            a.title.toUpperCase() < b.title.toUpperCase()? -1 : 0 
        )
    }

    const updateFactures = (facture) => {
        const updatedFactures = ordreAlphabetique([
            ...factures,
            facture
        ])
        localStorage.setItem('protexe-factures', JSON.stringify(updatedFactures))
        setFactures(updatedFactures)
    }

    const editFacture = (factureToUpdate) => {
        const filteredFacture = factures.filter((facture) => facture.title !== factureToUpdate.title)
        const updatedFactures = ordreAlphabetique([...filteredFacture, factureToUpdate])
        localStorage.setItem('protexe-factures', JSON.stringify(updatedFactures))
        setFactures(updatedFactures)
    }

    return (
        <FactureContext.Provider value={{
            factures,
            updateFactures,
            editFacture,
            selectedCostInterval,
            setSelectedCostInterval
        }}>
           {children}
        </FactureContext.Provider>
    )
}

export  {
    FactureContext, 
    FactureProvider
};
