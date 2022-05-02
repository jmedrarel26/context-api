
import './App.css';
import PokemonProvider from "./context/pokemons/Provider";
import  Routeses  from "./routes/index.js";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Routeses/>
      </PokemonProvider>
      
    </div>
  );
}
export default App;
