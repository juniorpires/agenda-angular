import { Component,OnInit } from '@angular/core';
import {Tarefa} from './model/tarefa';
import {RegistroService} from '../services/RegistroService';
import { Registro } from './model/registro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RegistroService]
})
export class AppComponent {
  registros: Registro[];
  registro: Registro;
  
  constructor( public service: RegistroService) {
     

  }

  ngOnInit(){
    this.registro = new Registro("","")
    this.listar()
  }

  public listar(){
    this.service.listar().then(
      response => this.registros = response
    ) 
  }

  public buscar(id){
    this.service.buscar(id).then(
      response => {
        
        this.registro = response[0]
        

      }
      
    ) 

   
  }



   gravar(){
      let registro = new Registro(this.registro.nome,this.registro.telefone)
        this.service.insertRegistro(registro).then(
        result =>{
          console.log(result)
          this.registro = new Registro("","")
          this.listar()
        }
      )
    }

    update(id){
      let registro = new Registro(this.registro.nome,this.registro.telefone)
      registro.id = id;
      this.service.update(registro).then(
          result => { 
            this.registro = new Registro("","")
            this.listar()
          }
        )
    
    }

    deletar(id){
      this.service.deletar(id).then(
        result=> {
          console.log(result)
          this.listar()
        }
      )
    }
}
