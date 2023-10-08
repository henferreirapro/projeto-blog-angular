import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-titulo',
  templateUrl: './menu-titulo.component.html',
  styleUrls: ['./menu-titulo.component.css']
})
export class MenuTituloComponent {

  @Input() tituloCard: string = "THE BLOG";
}
