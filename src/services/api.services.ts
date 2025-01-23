import axios from "axios";
import {retriveLocalStorage} from "./helpers.ts";
import {IProduct} from "../models/IProduct.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}
// звернення до арі
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

// інтерсептор перехоплює запити щоб додати до них токен
// ахіос\виклик інтерсептора\перед відправкою запиту\
axiosInstance.interceptors.request.use((requestObject) => {
    // перевірка чи метод запиту є get
    if (requestObject.method?.toUpperCase() === 'GET') {
        // додає до запиту header Authorization у форматі Bearer + access token, який дістається з локального сховища
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

// логінація:  передаємо в аргументі ім'я користувача, пароль і час дії \ типізуємо
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    // деструктуризація data\ запит ахіос пост на урлу login за аргументами
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    // в локальне сховище записуємо дані користувача
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

// завантаження продуктів з авторизацією
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');

    return products
}

// отримання оновлених даний логінації
export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}