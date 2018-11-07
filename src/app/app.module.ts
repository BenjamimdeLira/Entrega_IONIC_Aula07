import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CrudPageModule } from '../pages/crud/crud.module';
import { GeneroPageModule } from '../pages/genero/genero.module';
import { PopularidadePageModule } from '../pages/popularidade/popularidade.module';
import { LancamentoPageModule } from '../pages/lancamento/lancamento.module';
import { FilmePageModule } from '../pages/filme/filme.module';
import { DestinoPage } from '../pages/destino/destino';
import { DestinoPageModule } from '../pages/destino/destino.module';
import { Destino1PageModule } from '../pages/destino1/destino1.module';
import { HttpModule } from "@angular/http";
import { MovieProvider } from '../providers/movie/movie';

/**
 *
 *  Benjamim de Lira Siqueira Melo RA: 816112054
 *
 */

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CrudPageModule,
    GeneroPageModule,
    PopularidadePageModule,
    LancamentoPageModule,
    FilmePageModule,
    DestinoPageModule,
    Destino1PageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
