import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/toPromise'
import { Registro } from '../app/model/registro';



@Injectable()
export class RegistroService{


    private url:string  = 'http://localhost:3000/api/v1/registro';

    constructor(public http: HttpClient){}
    

    
    insertRegistro(nome,telefone): Promise<Registro[]>{
        let body = {
              "nome":nome,
              "telefone":telefone  
        }
        return this.http.post(this.url,body,{})
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