import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-formulario-normal',
  imports: [FormsModule],
  templateUrl: './formulario-normal.html',
  styleUrl: './formulario-normal.css'
})
export class FormularioNormal {

  name:string = "";
  names:string[] = [];

  enviar(){
    console.log(this.names);
    this.names.push(this.name);
    this.name = "";
  }


}
