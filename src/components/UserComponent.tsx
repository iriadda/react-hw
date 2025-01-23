import {IUser} from "../models/IUser.ts";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            <p>{user.id}: {user.name}</p>
        </div>
    );
};