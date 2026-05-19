import React from "react";

export default function aleatorio(props) {
    
    const min = props.min
    const max = props.max

    const valor = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong>{min}
            </p>
            <p>
                <strong>Valor Máximo: </strong>{max}
            </p>
            <p>
                <strong>Número Aleatório: </strong>{valor}
            </p>
        </div>
    )
}