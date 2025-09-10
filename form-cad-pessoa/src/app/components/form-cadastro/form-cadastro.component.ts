import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cadastro } from '../shared/cadastro';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent implements OnInit{
  cadastro!: Cadastro;
  showPassword: boolean = false;

  ngOnInit() {
    this.cadastro = new Cadastro();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  formatPhone(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
    }
    
    event.target.value = value;
    this.cadastro.telefone = value;
  }

  onSubmit() {
    console.log(this.cadastro);
    this.cadastro = new Cadastro();
  }
}