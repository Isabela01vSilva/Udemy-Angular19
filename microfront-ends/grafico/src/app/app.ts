import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    const dados = [
      {
        categoria: 'Categoria 1',
        valor: 10,
      },
      {
        categoria: 'Categoria 2',
        valor: 24,
      },
      {
        categoria: 'Categoria 3',
        valor: 15,
      },
      {
        categoria: 'Categoria 4',
        valor: 40,
      },
      {
        categoria: 'Categoria 5',
        valor: 3,
      },
    ];

    const labels = dados.map((v) => v.categoria);
    const valores = dados.map((v) => v.valor);

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Categorias mais vendidas',
            data: valores,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
