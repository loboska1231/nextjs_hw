import {IUser} from "@/models/IUser";

export const getAllUsers = async ():Promise<IUser[]>=>{
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(obj=>obj.json())
}
export const getUser = async (id:number):Promise<IUser>=>{
    return await fetch('https://jsonplaceholder.typicode.com/users/'+id)
        .then(obj=>obj.json())
}
