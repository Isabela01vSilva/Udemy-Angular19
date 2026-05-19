import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Produto 1',
      valor: 10.99,
      imagem: 'https://assets.unileversolutions.com/v1/132127043.png',
    },
    {
      nome: 'Produto 2',
      valor: 20.99,
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO2_4ELR0FXTx58zX40--m6rMCZEmSeXbOQ&s',
    },
    {
      nome: 'Produto 3',
      valor: 30.99,
      imagem:
        'https://www.casamagalhaes.com.br/blog/wp-content/uploads/2019/07/DESCUBRA-COMO-CRIAR-UM-MIX-DE-PRODUTOS-IDEAL-PARA-O-SEU-SUPERMERCADO-1.jpg',
    },
    {
      nome: 'Produto 4',
      valor: 40.99,
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsO2_4ELR0FXTx58zX40--m6rMCZEmSeXbOQ&s',
    }
  ];
}
