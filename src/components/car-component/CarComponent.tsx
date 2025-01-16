import {ICar} from "../models/ICar.ts";

interface CarComponentProps {
    car: ICar
}

export const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div>
            <p>{car.brand} {car.year}</p>
        </div>
    );
};