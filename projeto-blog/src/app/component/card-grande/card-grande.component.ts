import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-grande',
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css']
})
export class CardGrandeComponent {
  
  @Input() tituloCard: string = "Titulo do Card Grande para ser renderizado texto";

  @Input() dataPostMateria: string = "Outubro, 2023";
  
  @Input() textoParagrafo: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi alias rerum nostrum cumque necessitatibus placeat porro consequatur quaerat voluptate. Iure ad quae ut modi laudantium maxime ducimus quisquam harum.";

  @Input() imagemBanner: string = "../../../assets/img/img-retangular.png";

  @Input() id: string = "0";


}
