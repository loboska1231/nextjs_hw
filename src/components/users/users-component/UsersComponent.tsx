import {getAllUsers} from "@/services_N_helpers/api.service";
import {UserComponent} from "@/components/users/user-component/UserComponent";

export const UsersComponent = async () => {
    const users = await getAllUsers();
    return (
        <>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </>
    );
};