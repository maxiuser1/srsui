import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  public form = new FormGroup({
    tipoPersona: new FormControl('', Validators.required),
    tipoOperacion: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}
}
