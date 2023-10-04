import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './component/menu-nav/menu-nav.component';
import { MenuTituloComponent } from './component/menu-titulo/menu-titulo.component';
import { CardGrandeComponent } from './component/card-grande/card-grande.component';
import { CardPequenoComponent } from './component/card-pequeno/card-pequeno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    MenuTituloComponent,
    CardGrandeComponent,
    CardPequenoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
