import { postsControllers } from "../controllers/posts.controller";
import { Card } from "../controllers/carts.controller";

const buttonPost = document.querySelector("#crearPost") as HTMLButtonElement ;
const main = document.querySelector("#main") as HTMLDivElement ;

// logout
const logoutButton = document.querySelector("#logout-button") as HTMLButtonElement;
const session = sessionStorage.getItem('token');

const cardSection = document.querySelector('#carts-section') as HTMLElement;


const url:string = 'https://api-posts.codificando.xyz/';


(() => {
    if (!session) {
        alert('debes iniciar sesión');
        window.location.href = '../../index.html'
    }
})();

if(buttonPost && main){
    buttonPost.addEventListener("click", () => {
        main.classList.remove("ocultar");
        main.classList.add("mostrar");
    });
}


logoutButton.addEventListener('click', () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
});

async function showPost() {
    try {
        const citiesController = new postsControllers(url);
        const posts = await citiesController.getPosts('posts');
        console.log('Fetched posts:', posts); 
        posts.forEach(Card => {
            cardSection?.append(Card(Card));
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

showPost()
