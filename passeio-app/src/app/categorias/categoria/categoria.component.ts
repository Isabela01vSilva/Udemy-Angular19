import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent {
  camposForms: FormGroup;

  constructor(private service: CategoriaService) { 
    this.camposForms = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  salvar(){
    this.camposForms.markAllAsTouched();

    if(this.camposForms.valid){
      this.service
      .salvar(this.camposForms.value)
      .subscribe({
        next: (categoria) => {
          console.log("Categoria salva com sucesso!", categoria);
          this.camposForms.reset();
        },
        error: () => {
          console.log("Erro ao salvar categoria");
        }
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean{
    const campo = this.camposForms.get(nomeCampo);
    return campo?.invalid && campo.touched && campo?.errors?.['required'] || false;
  }
}
