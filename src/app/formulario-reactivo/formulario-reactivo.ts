import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {

  correos: string[] = [];

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    if (this.profileForm.valid) {
      this.correos.push(this.profileForm.value['email']!);
    }

  }

}
