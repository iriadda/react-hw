import {simpsons} from "../../data/simpsons-data.ts";
import CharacterComponent from "../character-component/character-component.tsx";


const FamilyComponent = () => {

    return (
        <div>
            {
                simpsons.map((value, index) =>
                    <CharacterComponent item={value} key={index}>
                        {value.info}
                    </CharacterComponent>)
            }
        </div>
    );
};

export default FamilyComponent;
