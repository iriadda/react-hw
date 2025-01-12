import {UserComponent} from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
            });
    },[])

    return (
        <div>
            {users.map((user:IUser) =><UserComponent user={user} key={user.id}/>)}
        </div>
    );
};