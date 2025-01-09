import {ITodo} from "../models/ITodo.ts";

export const getTodo = async (): Promise<ITodo[]> => {
    return await fetch(import.meta.env.VITE_API_URLTODO)
        .then(response => response.json());

}