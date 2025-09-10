import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from '../shared/login';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent implements OnInit{
  login!: Login;
  showPassword: boolean = false;

  ngOnInit() {
    this.login = new Login();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.login);
    // ao instanciar novamente o objeto cliente, você vai limpar os controles na tela
    this.login = new Login();
  }

}
