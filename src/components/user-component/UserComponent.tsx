import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import {FC} from "react";

interface UserComponentProps {
    user: IUser
}



export const UserComponent:FC<UserComponentProps> = ({user}) => {
    const navigation =useNavigate()
    const buttonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    };

    return (
        <div className='m-3.5'>
            <h3>{user.firstName} {user.lastName}</h3>
            <button className='border border-gray-800' onClick={()=>{buttonClickNavigate()}}>click me</button>
        </div>
    );
};