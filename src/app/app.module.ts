import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { SegmentosComponent } from './components/segmentos/segmentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContatoComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    QuemsomosComponent,
    PoliticaComponent,
    ParceirosComponent,
    SegmentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
