import {useEffect} from "react";
import {login} from "../services/api.services.ts";

export const LoginPage = () => {

    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        })
    })
        return (
            <>LoginPage</>
        );
};