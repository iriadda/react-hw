import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div className='m-3.5'>
            <ul>
                <li>
                    <Link to="/users">users</Link>
                </li>
            </ul>
        </div>
    );
};