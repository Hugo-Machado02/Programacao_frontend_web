import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  titulo = "Projeto - 01";
  email = "hugo_machado02@hotmail.com";
  telefone = "(64) 99341-1881";
  endereco = "Avenida José Dias Guimarães";
  descricao = "Sou um Aluno de programação apaixonado por tecnologia"
}
