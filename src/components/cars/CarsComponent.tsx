import {getCars} from "@/services/api.service";
import {CarComponent} from "@/components/cars/CarComponent";

export const CarsComponent =async () => {
    const cars = await getCars();
    return (
        <>
            {cars.map(car=><CarComponent key={car.id} car={car}/>)}
        </>
    );
};