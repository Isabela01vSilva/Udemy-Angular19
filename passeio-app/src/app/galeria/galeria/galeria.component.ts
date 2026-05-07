import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../../lugares/lugar.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService,
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => {
        this.categoriasFiltro = listaCategorias;
      },
    });

    this.lugarService.obterLugares().subscribe({
      next: (listaLugares) => {
        this.lugares = listaLugares;
      },
    });
  }

  getTotalEstrelas(lugar: Lugar): string {
    return (
      '&#9733;'.repeat(lugar.avaliacao || 0) +
      '&#9734;'.repeat(5 - (lugar.avaliacao || 0))
    );
  }

  filtrar() {
    this.lugarService.filtrarLugares(this.nomeFiltro, this.categoriaFiltro).subscribe({
      next: (listaLugares) => {
        this.lugares = listaLugares;
      },
    });
  }
}
