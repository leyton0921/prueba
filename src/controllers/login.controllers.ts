
import { ILogin, IResponseLogin } from "../models/ILogin";

export class UserLogin {
    url : string;

    constructor(url : string) {
        this.url = url;
    }

    async login(data : ILogin) : Promise<IResponseLogin> { 
        const response = await fetch(`${this.url}`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'Application/json'
            },
            //convertimos a json
            body : JSON.stringify(data) 
        });

        if (response.status != 201) {
            throw new Error('no se pudo iniciar sesión');
        //Si la respuesta es diferente de 201 hay un error

        }

        // Convertimos la respuesta en formato JSON a un objeto 
        const token : IResponseLogin = await response.json();
        return token;
    }
}