import {useFetch} from "../hooks/useFetch.tsx";
import {IUser} from "../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {

    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', []);


    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} user={user} />)}
        </div>
    );
};

