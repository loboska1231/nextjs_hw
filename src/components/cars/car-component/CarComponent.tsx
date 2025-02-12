import {ICar} from "@/models/ICar";
import {FC} from "react";

type propCar ={
    car:ICar
}

export const CarComponent:FC<propCar> = ({car}) => {
    return (
        <div>
            {car.brand}, {car.year}
        </div>
    );
};