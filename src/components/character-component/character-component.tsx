import {ReactNode} from 'react';
import {IComponent} from "../../models/IComponent.ts";

interface CharacterComponentProps {
    item: IComponent,
    children: ReactNode
}

const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='m-10 border border-gray-200 flex flex-col items-center justify-center gap-1'>
            <h3 className='text-base text-center font-bold'>{item.name} {item.surname}</h3>
            <p>{children}</p>
            <img src={item.photo} alt={item.name}/>
        </div>
    );
};

export default CharacterComponent;