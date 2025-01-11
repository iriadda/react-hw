import {FC} from "react";
import {IUsers} from "../../models/IUsers.ts";

type UserTypeProps={
    item: IUsers
}

export const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.firstName} {item.lastName}</h3>
        </div>
    );
};