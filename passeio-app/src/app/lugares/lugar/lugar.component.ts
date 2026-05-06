import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss',
})
export class LugarComponent implements OnInit {
  camposForms: FormGroup;
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {
    this.camposForms = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlImagem: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => {
        this.categorias = listaCategorias;
      },
    });
  }

  salvar() {
    console.log(this.camposForms.value);
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForms.get(nomeCampo);
    return (
      (campo?.invalid && campo.touched && campo?.errors?.['required']) || false
    );
  }
}
