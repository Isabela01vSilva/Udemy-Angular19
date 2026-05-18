import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-erro.component.html',
})
export class CampoControlErroComponent implements OnInit {
  @Input() mostrarErro: boolean;
  @Input() errorMessage: string;

  constructor() {}

  ngOnInit(): void {}
}
