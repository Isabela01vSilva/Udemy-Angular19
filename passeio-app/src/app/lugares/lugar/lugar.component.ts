import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss',
})
export class LugarComponent {
  camposForms: FormGroup;
  categorias: Categoria[] = [];

  constructor() {
    this.camposForms = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlImagem: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  salvar(){
    console.log(this.camposForms.value);
  }

  isCampoInvalido(nomeCampo: string): boolean{
    const campo = this.camposForms.get(nomeCampo);
    return campo?.invalid && campo.touched && campo?.errors?.['required'] || false;
  }
}
