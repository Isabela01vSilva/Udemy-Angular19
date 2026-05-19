import React from "react";
import DiretFilho from'./DiretaFilhos'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div>
            <DiretFilho nome = "Fabio" idade = {20} nerd={true} />
            <DiretFilho nome = "Junior" idade = {17} nerd={false} />
        </div>
    )
}