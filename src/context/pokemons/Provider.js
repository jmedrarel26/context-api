import PokemonContext from "./index";
import apiCall from "../../api";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";

export default function PokemonProvider({children}){
    const[pokemons, setPokemons] = useState([]);
    const[ pokemonDetail, setPokemonDetail] =useState({});
    const[isLoading, setIsLoading] = useState(false);
    const[haserror, setHasEror] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");

    const getPokemons = async () =>{
        try{
            setIsLoading(true);
            setHasEror(false);
            setErrorMessage("");
            const pokemonsResult = await apiCall({
                url: "https://pokeapi.co/api/v2/pokemon?limit=100"
            });
            setPokemons(pokemonsResult.results);
        }
        catch(error){
            setPokemons([]);
            setHasEror(true);
            setErrorMessage("Error al cargar");
        } 
        finally{
            setIsLoading(false);
        };
    };

    const getPokemonDetail = async (id) =>{
        if(!id) Promise.reject("id es requerido")
        try{
            setIsLoading(true);
            setHasEror(false);
            setErrorMessage("");
            const pokemonDetail = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}` 
            });
            setPokemonDetail(pokemonDetail);

        } catch (error){
            setPokemonDetail({});
            setHasEror(true);
            setErrorMessage("Error al cargar");
        }
        finally{
            setIsLoading(false);
        }
    }

    return(
        <PokemonContext.Provider value={{
            getPokemons,
            getPokemonDetail,
            pokemons,
            pokemonDetail,
            isLoading,
            haserror,
            errorMessage}}>

            {children}
        </PokemonContext.Provider>
    );
}
