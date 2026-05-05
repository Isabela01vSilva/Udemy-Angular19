import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent {
  camposForms: FormGroup;

  constructor() { 
    this.camposForms = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  salvar(){
    this.camposForms.markAllAsTouched();

    if(this.camposForms.invalid){
      console.log(this.camposForms.value);
    }

    console.log("Ta valido?", this.camposForms.valid);
  }

  isCampoInvalido(nomeCampo: string): boolean{
    const campo = this.camposForms.get(nomeCampo);
    return campo?.invalid && campo.touched && campo?.errors?.['required'] || false;
  }
}
