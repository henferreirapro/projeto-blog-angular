import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-grande',
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css']
})
export class CardGrandeComponent {
  
  @Input() tituloCard: string = "";
  @Input() dataPostMateria: string = "";
  
  @Input() textoParagrafo: string = "";
  @Input() imagemBanner: string = "";
}
