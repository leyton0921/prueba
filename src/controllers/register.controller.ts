import { IUserRegister,IUserVerification } from "../models/IRegister";

export class UserRegister { // clase para metodo
    
    async registerUser (url : string, user : IUserRegister) : Promise<void> {

        const response : Response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        });

        window.location.href = "index.html"

        console.log(response);

        alert('Usuario registrado :)');
        
    }
}


export class UserVerifications {

    inputsVerification (user : IUserVerification) : boolean {

        const {email, password, passwordConfirmation} = user;

        if( !email || !password || !passwordConfirmation) {
            return false;
        }
        
        return true;
    }

    passwordVerification (user : IUserVerification) : boolean {

        const {password, passwordConfirmation} = user;

        if (password !== passwordConfirmation) { 
            return false;
        }
        
        return true;
    }
}

