import React, { useState } from "react";
import IndiretaFilhos from './IndiretaFilhos'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            <IndiretaFilhos quandoClicar={fornecerInformacoes}/>
        </div>
    )
}