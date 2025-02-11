import {ICar} from "@/models/ICar";
import {FC} from "react";
const baseURL = 'http://owu.linkpc.net/carsAPI/v1/cars';
export const getCars = async ():Promise<ICar[]> =>{
    return await fetch(baseURL)
        .then(obj=>obj.json())
}
type prop = {
    brand:string,
    price:number,
    year:number
}
export const addCar:FC<prop> = async (formData)=>{
    fetch(baseURL,{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            brand:formData.brand,
            price:formData.price,
            year:formData.year
        })
    })
    return 1
}