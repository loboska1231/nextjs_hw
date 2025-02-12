'use client'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/components/validation/validor";
import {addCar} from "@/services_N_helpers/api.service";

type formCar = {
    brand:string,
    price:number,
    year:number
}
const AddPage = () => {
    const {
        register,
        handleSubmit,
        formState:{errors,isValid}
    } = useForm<formCar>({
        mode:'all',
        resolver:joiResolver(carValidator)
    })
    return (
        <div>
            <form onSubmit={handleSubmit(data=>{
                addCar({...data});
            })}>
                <label>
                    <input type="text" placeholder={'brand'} {...register('brand')} />
                    {errors.brand && <div>{errors.brand?.message}</div>}
                </label>
                <label>
                    <input type="number" placeholder={'year'} {...register('year')} />
                    {errors.year && <div>{errors.year?.message}</div>}
                </label>
                <label>
                    <input type="number" placeholder={'price'} {...register('price')} />
                    {errors.price && <div>{errors.price?.message}</div>}
                </label>
                <button disabled={!isValid}>add car</button>
            </form>
        </div>
    );
};
export default AddPage
