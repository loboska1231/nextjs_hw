import {Metadata} from "next";
import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type Props = {
    params: Promise<{id:string}>;
    searchParams:Promise<SearchParams>
}
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params
    console.log(id)
    return {
        title: 'User page' + id
    }
}
const UserPage:FC<Props> = async ({params,searchParams}) => {
    const {data} = await searchParams;
    const {id}= await params;
    let obj = null
    if(typeof data === 'string'){
        obj = JSON.parse(data)  as IUser
    }
    return (
        <div>
            <p>User page = {id}</p>
            {obj&&  <>{obj.name}, {obj.username}</>}
        </div>
    );
};
export default UserPage
