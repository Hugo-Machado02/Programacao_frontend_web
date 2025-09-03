import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  noticia1 = "Noticia 1";
  
  noticia2 = "Noticia 2";
  
  noticia3 = "Noticia 3";

  dadosGeral = "30/08/2025 • Categoria B";
  descricaoGeral = "Uma breve introdução sobre o assunto tratado nesta notícia, despertando o interesse do leitor.";
}
