import { useContext } from "react";
import PokemonContext from "../../context/pokemons";

export default function Four0Four(){
    const { pokemons} = useContext(PokemonContext);
    return (
        <div>
            <p>Lo sentimos, la ruta no existe.</p>
        </div>
    );
}