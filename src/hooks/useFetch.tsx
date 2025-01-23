import {useEffect, useState} from "react";

export const useFetch = <T,>(url: string, defaultValue:T) => {
    const [object, setObject] = useState<T>(defaultValue)
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((value) => {
                setObject(value)
            })
    }, []);
    return object;
}