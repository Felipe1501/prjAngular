import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    produtos:string[] = []
    menuType:string = 'superusers'

    constructor(){
        this.produtos = [
            "mouse",
            "teclado",
            "cabo",
            "for"
        ]
    }

  ngOnInit(): void {
      
  }

  adicionar(){
    this.produtos.pop()
  }

  remover(index: number){
    this.produtos.splice(index, 1)
  }
  title = 'diretivasAngular';
}
