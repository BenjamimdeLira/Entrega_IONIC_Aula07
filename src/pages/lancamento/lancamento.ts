import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 *  Benjamim de Lira Siqueira Melo RA: 816112054
 *
 */

@IonicPage()
@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
  providers: [
    MovieProvider
  ]
})
export class LancamentoPage {

  public lancamentos = new Array<any>();

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider) {
    
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lancamentos = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
