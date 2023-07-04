import React, {useState} from "react";
let Radio_A_list = new Map([["test1",""],["kinotake",""]]);

const RadioButton = (({Q_id, option, selected, onChange}) => {
    option.map((op) =>{
        if(op === selected){
            console.log(Q_id,op);
            Radio_A_list.set(Q_id,op);
            console.log(Radio_A_list);
        }
    });

    return (
        <div>
            {option.map((itemOfoption,idx) => (
                <div className="radio">
                    <label key={option[idx]}>
                        <input type="radio" value={option[idx]} name={Q_id} checked={Radio_A_list.get(Q_id) === option[idx]} onChange={onChange}></input>
                        {option[idx]}
                    </label>
                </div>
            ))}
        </div>
    );
});

export default RadioButton;
export {Radio_A_list}