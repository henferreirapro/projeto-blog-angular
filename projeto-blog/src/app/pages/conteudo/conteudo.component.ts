import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bancoDadosNoticias } from 'src/app/data/dadosNoticias';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  
  @Input() imagemBanner: string = "../../../assets/img/img-retangular-grande.png";

  @Input() dataPostMateria: string = "";

  @Input() tituloCard: string = "";

  @Input() textoParagrafo: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quasi nesciunt odio doloremque rerum, commodi optio maiores. Ducimus quisquam recusandae enim odio ipsum at dolores magnam mollitia ratione. Sed, laudantium! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quasi nesciunt odio doloremque rerum, commodi optio maiores. Ducimus quisquam recusandae enim odio ipsum at dolores magnam mollitia ratione. Sed, laudantium!";

  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) {}

  // buscando o id do nosso componente card
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = (value.get("id"))
    )

    // enviando os valores do id para a nossa função
    this.setValoresNoComponent(this.id)
  }

  // Pegandos os valores dos componentes no nosso banco de dados
  setValoresNoComponent(id: string | null) {
    const resultado = bancoDadosNoticias.filter( 
      dados => dados.id == id
    )[0]
    // console.log(resultado)


    this.imagemBanner = resultado.imgNoticia;
    this.dataPostMateria = resultado.dataPost;
    this.tituloCard = resultado.tituloNoticia;
    this.textoParagrafo = resultado.textoNoticia;
  }
}
