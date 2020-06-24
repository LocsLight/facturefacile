import React, {useState, useContext} from 'react';
import { FactureContext } from '../../Context/FactureContext';

const AddFacture = () => {

    const {contextValue} = useContext(FactureContext)

    const [newFactureTitle, setNewFactureTitle] = useState('')
    const [newFactureCost, setNewFactureCost] = useState('')

    //  const factureObjectValid = () => {
    //     const titleValid = newFactureTitle && newFactureTitle.split('').find(char => char !== ' ')
    //     const costValid = newFactureCost && Number.parseFloat()

    //      return titleValid && costValid
    //  }
    
  
    return (
        <div className='add-facture-container'>
        <h1>Wesh la famille</h1>
        <input className='add-facture-form-control form-control'
        placeholder='Entrez un titre de facture'
        type='text'
        value={newFactureTitle}
        onChange={(e) => setNewFactureTitle(e.target.value)}></input>
        <input className='add-facture-form-control form-control'
        placeholder='Entrez le montant de la facture'
        type='number'
        value={newFactureCost}
        onChange={(e) => setNewFactureCost(e.target.value)}></input>
        <FactureContext.Consumer value={contextValue}>
            { ({updateFactures}) => (
                <button
                className='add-facture-form-control btn btn-primary'
                onClick={() => {updateFactures({
                    title: newFactureTitle,
                    monthlyCost: newFactureCost
                    })
                }}>Ajouter la facture
                </button>
            )
        }
        </FactureContext.Consumer>
        </div>
    );
}

export default AddFacture;
