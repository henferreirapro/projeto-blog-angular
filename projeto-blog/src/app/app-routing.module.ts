import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

const routes: Routes = [
  // Rota principal
  {
    path: "",
    component: HomeComponent
  },
  { //Rota para pagina conteudo
    path: "conteudo/id",
    component: ConteudoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
