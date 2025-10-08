import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  cliente!: Cliente;

  ngOnInit() {
    this.cliente = new Cliente();
  }

  onSubmit(){
    console.log(this.cliente);
    
    this.cliente = new Cliente();}
}
