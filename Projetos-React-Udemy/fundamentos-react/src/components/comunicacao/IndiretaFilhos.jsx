import React from "react";

function filhos(props){
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random () * (max - min)) + 50 
    const gerarNerd = () => Math.random() > 0.5 

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e){
                    props.quandoClicar('João', gerarIdade, gerarNerd)
                }
            }>Fornecer Informações</button>
        </div>
    )
}
export default filhos;