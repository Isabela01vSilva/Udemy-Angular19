import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/internal/operators/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };

  onSubmit(form) {
    console.log(form);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe((dados) => console.log(dados));
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep, form) {
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != '') {
      this.resetarDados(form);

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .subscribe((dados) => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, formulario) {
    /* formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        numero: '',
        complemento: '',
      },
    }); */

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    console.log(formulario);
  }

  resetarDados(formulario) {
    formulario.reset();
  }
}
