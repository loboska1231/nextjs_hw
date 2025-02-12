import {FC} from "react";
import {CarsComponent} from "@/components/cars/cars-component/CarsComponent";
type props = {
    searchParams:{
        [key:string]:string|string[]|undefined
    }
}
const CarsPage:FC<props> =async (searchParams) => {
    const sp = await searchParams;
    console.log(sp)
    return (
        <div>
            <CarsComponent/>
        </div>
    );
};
export default CarsPage