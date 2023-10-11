import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent {

  
  @Input() imagemBanner: string = "../../../assets/img/img-retangular-grande.png";

  @Input() tituloCard: string = "Titulo da Nossa noticia";

  @Input() textoParagrafo: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quasi nesciunt odio doloremque rerum, commodi optio maiores. Ducimus quisquam recusandae enim odio ipsum at dolores magnam mollitia ratione. Sed, laudantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quasi nesciunt odio doloremque rerum, commodi optio maiores. Ducimus quisquam recusandae enim odio ipsum at dolores magnam mollitia ratione. Sed, laudantium!";
}
