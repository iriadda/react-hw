import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../../validators/CarValidator.ts";
import {addCar} from "../../services/cars.api.service.ts";

export const FormCreateCar = () => {
    const {handleSubmit, register, formState:{errors}}=useForm<ICar>({mode: 'all', resolver:joiResolver(carValidator)});

    const createHandler = (data:ICar) => {
        addCar(data)

    };

    return (
        <form onSubmit={handleSubmit(createHandler)}>
            <input type="text" placeholder="brand" {...register("brand")} />
            <div>{errors.brand?.message}</div>

            <input type="number" placeholder="prace" {...register("price")} />
            <div>{errors.price?.message}</div>

            <input type="number" placeholder="year" {...register("year")} />
            <div>{errors.year?.message}</div>

            <button>Create</button>
        </form>
    );
};