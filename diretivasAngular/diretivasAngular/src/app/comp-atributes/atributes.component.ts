import { Component } from '@angular/core';

@Component({
  selector: 'app-atributes',
  templateUrl: './atributes.component.html',
  styleUrls: ['./atributes.component.css']
})
export class AtributesComponent   {

    estilo:string = 'disable'
    corFundo:string = 'red'
    corFonte:string = 'white'
    item:string = ''
    lista:string[] = []
    isEnableBlock:boolean = true

    constructor(){
    }

    adicionarLista(){
      this.lista.push(this.item)
    }

    trocar(){
      if(this.estilo === "disable"){
        this.estilo = "enable"
      }else{
        this.estilo = "disable"
      }
    }

  title = 'diretivasAngular';
}
