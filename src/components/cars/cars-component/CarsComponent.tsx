import {FC} from "react";
import {getAllCars} from "@/services_N_helpers/api.service";
import {CarComponent} from "@/components/cars/car-component/CarComponent";



export const CarsComponent = async () => {

    const cars = await getAllCars();
    return (
        <>
            {cars.map(car=><CarComponent key={car.id} car={car}/>)}
        </>
    );
};