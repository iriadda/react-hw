import {PaginationComponent} from "../pagination-component/PaginationComponent.tsx";
import {UsersComponent} from "../users-component/UsersComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};