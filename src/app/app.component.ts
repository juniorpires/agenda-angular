import { Component } from '@angular/core';
import {Tarefa} from './model/tarefa';
import {RegistroService} from '../services/RegistroService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RegistroService]
})
export class AppComponent {
	tarefas: Tarefa[];
  
  constructor( public service: RegistroService) {
    this.tarefas = [  ];   
  }

   gravar(titulo, descricao, peso){
      //let tarefa = new Tarefa(titulo, descicao, peso);
      //this.tarefas.push(tarefa);

      this.service.insertRegistro(titulo,descricao).then(
        result =>{
          console.log(result)
        }
      )


    }

    deletar(id){
     
       this.tarefas.splice(id, 1);
    }
}
