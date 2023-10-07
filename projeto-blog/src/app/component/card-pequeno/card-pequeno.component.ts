import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pequeno',
  templateUrl: './card-pequeno.component.html',
  styleUrls: ['./card-pequeno.component.css']
})
export class CardPequenoComponent {
  @Input() textoParagrafo: string = "";

  @Input() dataPostMateria: string = "";


}
