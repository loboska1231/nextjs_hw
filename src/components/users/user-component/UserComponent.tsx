import {IUser} from "@/models/IUser";
import {FC} from "react";
import Link from "next/link";

type userProp = {
    user: IUser
}
export const UserComponent: FC<userProp> = ({user}) => {
    return (
        <div>
            <Link href={{pathname:'/users/'+user.id, query:{data:JSON.stringify(user)} }}>
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.username},{user.id}</p>
                </div>
            </Link>
            <br/>
        </div>
    );
};