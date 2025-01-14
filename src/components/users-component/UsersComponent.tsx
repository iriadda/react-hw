import {useEffect, useState} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../service/api.service.tsx";
import {IUserResponce} from "../../models/IUserResponce.ts";
import {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [query]=useSearchParams()

    useEffect(() => {
        const currentPage = query.get('page') ||'1'
        getUsers(currentPage)
        .then(({users}:IUserResponce) => setUsers(users))
    }, [query])


    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id} user={user} />))}
        </div>
    );
};