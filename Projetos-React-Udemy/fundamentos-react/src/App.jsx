import React from "react";

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicoes/ParOuImpar";
import Usuarioinfo from "./components/condicoes/Usuarioinfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="13 - Desafio - Mega  " color="#B9006E">
                <Mega qtde={8}/>
            </Card>

            <Card titulo="12 - Contador  " color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="11 - Componente controlado (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai />
            </Card>

            <Card titulo="09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="08 - Renderização condição" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <Usuarioinfo usuario={{ nome: "Fernanda" }} />
            </Card>

            <Card titulo="07 - Repetição - Desafio" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome='Isabela' />
                    <FamiliaMembro nome='Julia' />
                    <FamiliaMembro nome='Carla' />
                </Familia>
            </Card>

            <Card titulo="04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="02 - Situação de um aluno" color="#E8871A">
                <ComParametro
                    aluno="Jorge"
                    nota={8.5} />
            </Card>

            <Card titulo="01 - Primeiro " color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
)