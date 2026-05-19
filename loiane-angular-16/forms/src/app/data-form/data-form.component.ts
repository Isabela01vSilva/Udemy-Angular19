import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  
  constructor() {}

  ngOnInit(): void {}
}
