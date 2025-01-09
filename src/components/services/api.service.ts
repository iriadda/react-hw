import { ITodoResp} from "../../models/ITodo.ts";

export const getTodo = async ():Promise<ITodoResp> =>{
   return await fetch(import.meta.env.VITE_API_TODOS)
    .then(response => response.json())
}