const baseURL = 'https://jsonplaceholder.typicode.com'

export const getAll = async <T> (endpoint:string)=>{
    const respResult = await fetch(`${baseURL}${endpoint}`)
        .then(res => res.json())
    return respResult as T
}
