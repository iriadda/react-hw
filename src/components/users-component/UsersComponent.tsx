import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {


    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userSlice.users);
    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);



    return (
        <>
            {users.map((user:IUser) => <UserComponent user={user} key={user.id}/> )}
        </>
    );
};