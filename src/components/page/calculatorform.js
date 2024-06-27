import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Calculatorform = () => {

    const [totalEmployee, setTotalEmployee] = useState('');
    const [targetedReduction, setTargetedReduction ] = useState('');
    const [employeeCount, setEmployeeCount ] = useState('')
    const [attritionSaved, setAttritionSaved ] = useState('');
    const [totalValue, setTotalValue] = useState('')

    const handleCalculate = (e) => {
        e.preventDefault()
        let newData;
        let calculatedValue = (Number(totalEmployee) * Number(targetedReduction)) / 100;     
        setEmployeeCount(calculatedValue);
       
        if(calculatedValue) {
            newData = (Number(employeeCount) * Number(attritionSaved))
        }
        setTotalValue(totalValue)
    }


    return (
        <Fragment>
            <form id="contact-form" action="#" >
                <div className="row">
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Total No of employee*</label>
                            <input type="text" placeholder="Total Employee" value={totalEmployee} onChange={(e) => setTotalEmployee(e.target.value)}/>

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Targeted reduction in attrition(%)*</label>
                            <input type="text" placeholder="Targeted reduction"  value={targetedReduction} onChange={(e) => setTargetedReduction(e.target.value)}
                            />
                        </div>
                    </div>

                   <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <label>Targeted reduction in attrition(%)*</label>
                            <input type="text" placeholder="Targeted reduction"  value={attritionSaved} onChange={(e) => setAttritionSaved(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn-eight ripple-btn calculator" onClick={handleCalculate}>Saved</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Calculatorform