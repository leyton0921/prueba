import { IPosts } from "../models/IPosts";
export  class postsControllers{
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getPosts(endPoint: string): Promise<IPosts> {
        const response = await fetch(`${this.url}${endPoint}`);
        const data = await response.json();
        console.log(response.status);

        return data;
    }

    async post(endPoint: string, dataPost: IPosts) {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataPost)
        });

        console.log(response.status);

        if (response.status !== 201) {
            throw new Error(`No se puede publicar`);
        }

        const data = await response.json();
        return data;
    }

    async deletePost(endPoint: string): Promise<IPosts> {
        const headers: Record<string, string> = {
            "accept": "*/*",
        };
        const reqOptions: RequestInit = {
            method: "DELETE",
            headers: headers,
        };

        const response: Response = await fetch(`${this.url}${endPoint}`, reqOptions);

        if (!response.ok) {
            throw new Error(`Error al eliminar la ciudad: ${response.statusText}`);
        }

        const responseDelete: IPosts = await response.json();
        return responseDelete;
    }

    async updatePost(id: string, endPoint: string, dataPost: IPosts): Promise<IPosts> {
        const headers: Record<string, string> = {
            "accept": "*/*",
            "Content-Type": "application/json",
        };

        const reqOptions: RequestInit = {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(dataPost)
        };

        const response: Response = await fetch(`${this.url}${endPoint}${id}`, reqOptions);
        console.log(response);
        

        if (!response.ok) {
            throw new Error(`Error al actualizar los post: ${response.statusText}`);
        }

        const updatedCity: IPosts = await response.json();
        return updatedCity;
    }
}

