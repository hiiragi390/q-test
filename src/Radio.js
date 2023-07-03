import React, {useState} from "react";

function RadioButton({option, selected, onChange}){
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