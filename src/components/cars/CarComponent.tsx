import {FC} from "react";
import {ICar} from "@/models/ICar";
type carProp={
    car:ICar
}
export const CarComponent:FC<carProp> = ({car}) => {
    return (
        <>
            <div key={car.id}>
                {car.brand},{car.price}
            </div>
        </>
    );
};