import { IPosts } from "../models/IPosts";
import { postsControllers } from "./posts.controller";

export const Card = (props:IPosts):HTMLElement=>{
    let {id,postByUser,title,body,creationDate,postUrl} = props;
    const cardsContainer = document.createElement("article")as HTMLElement;
    cardsContainer.className = "card-container";

    const userInfo = document.createElement("p")  as HTMLParagraphElement;
    userInfo.className = "id"

    const nameUser = document.createElement("p")as HTMLParagraphElement;
    nameUser.className = "user-name"

    const infoContainer = document.createElement("div")as HTMLElement;
    infoContainer.className = "cardInfo-container";

    const cardTitle = document.querySelector("h3")as HTMLHeadElement;
    cardTitle.className = "card-title"

    const cardDescription = document.createElement("p") as HTMLParagraphElement;

    const date = document.createElement("p") as HTMLParagraphElement;
    const urlPost = document.createElement("p") as HTMLParagraphElement;


    cardTitle.innerText = title;
    cardDescription.innerText = body;
    date.innerText = creationDate;
    userInfo.innerText = id;
    nameUser.innerText = postByUser;
    urlPost.innerText = postUrl;

    const crossContainer = document.createElement("span");
    crossContainer.className = "cross-container";
    crossContainer.innerHTML = `<i product-id="${id}" class="bi bi-x-circle-fill"></i>`;

    const updateButton = document.createElement("button");
    updateButton.innerText = "Actualizar";
    updateButton.className = "update-button";

    updateButton.addEventListener("click", () => {
        const main = document.querySelector("#main") as HTMLDivElement ;
        main.classList.remove("ocultar");
        main.classList.add("mostrar");
        
        // Actualiza los valores del formulario
        (document.querySelector("#titulo-post") as HTMLInputElement).value = title;
        (document.querySelector("#body-post") as HTMLInputElement).value = body;
   
        
        // Almacena el ID de la ciudad para actualizar
        const userIdInput = document.querySelector("#id") as HTMLInputElement;
        if (userIdInput) {
            userIdInput.value = String(id); // Convertimos el id a string
        }
    });

    crossContainer.addEventListener("click", async () => {
        const eliminar = confirm('¿Deseas eliminar?');
        if (eliminar) {
            try {
                const citiesController = new postsControllers('http://localhost:3000/');
                await citiesController.deletePost(`cities/${id}`);
                cardsContainer.remove();
            } catch (error) {
                console.error("Error al eliminar el post:", error);
            }
        }
    });

    infoContainer.append(cardTitle,  cardDescription,date,userInfo,nameUser, updateButton);
    cardsContainer.append(infoContainer, crossContainer);


    return cardsContainer

}