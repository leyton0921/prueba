import { UserLogin } from "../controllers/login.controllers";

const url = 'https://api-posts.codificando.xyz/auth/login';

const loginForm = document.querySelector("#login-form") as HTMLFormElement;
const email = document.querySelector("#email") as HTMLInputElement;
const password = document.querySelector("#password") as HTMLInputElement;


loginForm.addEventListener("submit", async (event : Event) => {
  event.preventDefault();
  
  const usuario = {
    email : email.value,
    password : password.value
  }

 try{
  const pageController = new UserLogin(url);
  const token = await pageController.login(usuario);

  console.log(token);
  


  sessionStorage.setItem('token', token.token);

  const getToken = sessionStorage.getItem('token');

  if (getToken) {
    window.location.href = '/src/view/home.html'
    alert('se inició sesión');
  }
 }
 catch (error) {
  alert(error);
  window.location.href = 'index.html'
 }

})