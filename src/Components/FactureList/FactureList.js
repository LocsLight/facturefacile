import React,{useContext, useState} from 'react';
import './styles.css';
import { FactureContext } from '../../Context/FactureContext';



const FactureList = () => {
    const {factures, editFacture} = useContext(FactureContext)
    return (
        <div className='factures-container-list'>
            {
                factures.map((facture, index) => {
                    return(
                        <div key={index} className='facture-list-content'>
                            <input type="checkbox"
                            className="form-check-input"
                            checked = {!facture.enabled}
                            onChange={() => editFacture({
                                title: facture.title,
                                monthlyCost: facture.monthlyCost,
                                enabled: !facture.enabled
                            })}>
                            </input>
                            <div className="facture-list-row-content">
                                {facture.title} - {facture.monthlyCost}€
                            </div>
                        </div>
                    )
                })
            }
            </div>
    );
};





export default FactureList;
