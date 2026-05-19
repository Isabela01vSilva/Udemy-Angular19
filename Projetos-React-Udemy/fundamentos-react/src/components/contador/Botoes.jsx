import React from "react";

function Botoes(props) {
    return (
        <div>
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </div>
    )
}

export default Botoes