import {CarsComponent} from "@/components/cars/CarsComponent";
import {FC} from "react";
import {addCar} from "@/services/api.service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
type props={
    searchParams:Promise<{
        [key:string]:string|string[]|undefined
    }>
}
const CarsPage:FC<props> = async ({searchParams}) => {
    const sp = await searchParams;
    if(sp){
        console.log(sp)
        addCar(sp)
    }
    return (
        <div>
            <CarsComponent/>
        </div>
    );
};
export default CarsPage
