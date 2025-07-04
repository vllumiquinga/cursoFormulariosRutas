import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivo {

  correos:string[] = [];

  profileForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.email
    );
    let correo = this.profileForm.value.email;
    this.correos.push(correo);
  }

}
