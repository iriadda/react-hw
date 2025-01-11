import {useEffect, useState} from "react";
import {IUsers} from "../../models/IUsers.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/users.api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {
            getUsers()
            .then((value) => {
                setUsers(value.users);
            });
    },[])
    return (
        <div>
            {
                users.map((user) => <UserComponent item={user} key={user.id}/>)
            }
        </div>
    );
};