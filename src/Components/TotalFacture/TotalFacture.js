import React, {useContext} from 'react';
import { FactureContext } from '../../Context/FactureContext';

const TotalFacture = () => {

    const {factures, selectedCostInterval} = useContext(FactureContext)


    const moneyIntervalTransform = (cost) => {
        const monthlyCost = Number.parseFloat(cost)
        switch (selectedCostInterval){
            case 'mois':
                return monthlyCost;
            case 'jour':
                return monthlyCost*12 / 365;
            case 'semaine':
                return monthlyCost *12;
            case 'an':
                return monthlyCost *12;
            default:
                return 0;
        }
    }
    return(
        <div>
        <div className='factures-interval-container'>
        Coût par {selectedCostInterval} : {
            <span className='total-cost'>
            {
                factures.reduce((accumulator, facture) => {
                return !facture.enabled 
                    ? moneyIntervalTransform(facture.monthlyCost) + accumulator
                    : accumulator;
                },0).toFixed(2) + ' €'
            } 
            </span>
        }
        </div>
        <div className='facture-interval-container'>
        Somme économisée par {selectedCostInterval} : {
            <span className='total-saved'>
            {
                factures.reduce((acc, facture)=> {
                    return facture.enabled
                        ? moneyIntervalTransform(facture.monthlyCost) + acc
                        : acc
                },0).toFixed(2) + ' €'
            }
            </span>
        }
        </div>
        </div>
    )
}

export default TotalFacture;
