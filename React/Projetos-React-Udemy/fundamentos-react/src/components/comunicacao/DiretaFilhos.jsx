import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            <span>{props.nome} </span>
            <span>Idade: {props.idade} </span>
            <span>{props.nerd ? "Verdadeiro" : "Falso"}! </span>
        </div>
    )
}