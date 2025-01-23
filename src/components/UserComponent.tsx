
import {FC, memo} from "react";
//                                                                                         зупиняє ререндер якщо нема ф-цій і не змінються пропси
export const UserComponent: FC<{ foo: () => void, arr: number[], item: { name: string } }> = memo(({arr, item}) => {
    console.log('user');
    console.log(arr);

    return (
        <div>{item.name}</div>
    );
});
