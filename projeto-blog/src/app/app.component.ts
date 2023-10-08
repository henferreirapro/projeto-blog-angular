import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-blog';

  // Parametros de texto para os cards
  dataPostMateria: string = "";
  textoParagrafo: string = "";
  tituloCard: string = "";
  imagemBanner: string = "";
}
