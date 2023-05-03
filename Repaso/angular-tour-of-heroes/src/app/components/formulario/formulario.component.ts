import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario = this.fb.group({
    nombre: ['nombre', [Validators.required, Validators.minLength(2)]],
    apellido: ['apellido', [Validators.required, Validators.minLength(2)]],
    dni: ['dni', [Validators.required, Validators.pattern(/^(\d{8})([A-Z])$/)]],
  })

  contador: number;

  constructor(private fb: FormBuilder) {
    this.contador = 0;
  }

  submit() {
    this.contador++;

  }
}
