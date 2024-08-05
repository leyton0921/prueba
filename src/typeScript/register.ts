import { UserRegister, UserVerifications } from "../controllers/register.controller";
import { IUserRegister, IUserVerification } from "../models/IRegister";

const formRegister = document.querySelector("#register-form") as HTMLFormElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userPassword = document.querySelector("#password") as HTMLInputElement;
const passwordConfirmation = document.querySelector("#password-confirmation") as HTMLInputElement;



const url : string = 'https://api-posts.codificando.xyz/users/register';

formRegister.addEventListener("submit", async (event : Event) => { 
    event.preventDefault();
    await verificar();
});

const verificar = async () => {

    const newUser : IUserVerification = {
        email : userEmail.value,
        password : userPassword.value,
        passwordConfirmation :passwordConfirmation.value
    }

    const userVerifications = new UserVerifications;

    const inputs = userVerifications.inputsVerification(newUser);
    
    if(!inputs){
        alert('por favor, complete todos los campos');
        return;
    }

    
    if (userPassword !== passwordConfirmation) { 
        alert("Las contraseñas deben coincidir")
        return false
    }
    

    await createUser();

}

const createUser = async () => { 

    const newUser : IUserRegister = {
        email : userEmail.value,
        password : userPassword.value
    };

    const createUser = new UserRegister;
    await createUser.registerUser(url, newUser); 
}