import axios from "axios";
import {ICar} from "@/models/ICar";

const axiosInstance = axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v1',
    headers:{'Content-type': 'application/json'}
})
export const getAllCars = async () :Promise<ICar[]>=>{
    const {data} = await axiosInstance.get<ICar[]>('/cars')
    return data;
}
type formCar = {
    brand:string,
    price:number,
    year:number
}
export const addCar = async ({brand,price,year}:formCar) =>{
    const {data} = await axiosInstance.post<formCar>('cars', {brand,price,year})
    console.log(data)
}