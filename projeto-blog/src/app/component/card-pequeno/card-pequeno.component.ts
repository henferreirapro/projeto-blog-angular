import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pequeno',
  templateUrl: './card-pequeno.component.html',
  styleUrls: ['./card-pequeno.component.css']
})
export class CardPequenoComponent {
  @Input() imagemBanner: string = "../../../assets/img/img-retangular.png";

  @Input() dataPostMateria: string = "Outubro, 2023";

  @Input() textoParagrafo: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi alias rerum nostrum cumque necessitatibus placeat";

  // Add id para rota do conteudo no banco de dados
  @Input() id: string = "0";
  
}
