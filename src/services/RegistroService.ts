import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/toPromise'
import { Registro } from '../app/model/registro';



@Injectable()
export class RegistroService{


    private url:string  = 'http://localhost:3000/api/v1/registro/';

    constructor(public http: HttpClient){}
    

    
    insertRegistro(registro): Promise<Registro[]>{
        let body = JSON.stringify(registro)
        let js = JSON.parse(body)
        
      

        return this.http.post(this.url,js,{})
        .toPromise()
        .then(response => {
            return response
        })
            
        .catch(this.handleError)
    }

    update(registro): Promise<Registro[]>{
        let body = JSON.stringify(registro)
        let js = JSON.parse(body)
        let lUrl = this.url+registro.id
      

        return this.http.put(lUrl,js,{})
        .toPromise()
        .then(response => {
            return response
        })
            
        .catch(this.handleError)
    }


    listar(): Promise<Registro[]>{
        return this.http.get(this.url,{})
        .toPromise()
        .then(response => {
            return response
        })
            
        .catch(this.handleError)
    }


    buscar(id): Promise<Registro[]>{
        let lUrl = this.url+id
        
        return this.http.get(lUrl,{})
        .toPromise()
        .then(response => {
            console.log(response[0])
            return response
        })
            
        .catch(this.handleError)
    }


    deletar(id): Promise<Registro[]>{
        let lUrl = this.url+id
        return this.http.delete(lUrl,{})
        .toPromise()
        .then(response => {
            return response
        })
            
        .catch(this.handleError)
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}