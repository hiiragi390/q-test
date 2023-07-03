import React, {useState} from "react";
let Radio_A_list = {};

function RadioButton(Q_id,{option, selected, onChange}){
    Radio_A_list[Q_id] = selected;
    return (
        <div>
            {option.map((op) => (
                <label key={op}>
                    <input type="radio" value={op} checked={selected === op} onChange={onChange}></input>
                    {op}
                </label>
            ))}
        </div>
    );
}

export default RadioButton;
export {Radio_A_list}