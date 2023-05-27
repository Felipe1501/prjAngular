import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent implements 
    OnInit, 
    OnChanges,
    DoCheck, 
    AfterContentChecked, 
    AfterContentInit, 
    AfterViewChecked, 
    AfterViewInit,
    OnDestroy {
  @Input() nome: string = '';
  quantidade:number = 0
  constructor(){}

    adicionar(){
        this.quantidade += 1
    }

    decrementar(){
        this.quantidade -=1
    }
  
    //checked -> content -> view

    //quando o 1o conteúdo for iniciado
    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }
    //depois de inicialização da view
    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }
    //após alguma alteração, verifica o conteúdo
    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    //após alguma alteração, verifica a view
    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy(): void {
        console.log("falou fi");
        
    }
    ngDoCheck(): void {
        console.log("ngDoCheck");
    }
    ngOnChanges(changes: SimpleChanges): void {

    }
    ngOnInit(): void {
        this.nome = `testando o onInit ${this.nome}`
    }

    
}   