import {useEffect, useState} from "react";
import {getAllCars} from "../services/cars.api.service.ts";
import {ICar} from "../models/ICar.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getAllCars().then(cars => setCars(cars))
    },[])
    return (
        <div>
            {cars.map((car) => <CarComponent car={car} key={car.id} /> )}
        </div>
    );
};