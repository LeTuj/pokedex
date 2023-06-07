import "./NavBar.css";

const NavBar = ({ pokeprops, pokelist }) => {
  const [pokemonCount, setPokemonCount] = pokeprops;

  const handleClick = (pokemonCount) => {
    setPokemonCount(pokemonCount);
  };

  return (
    <div>
      {pokelist.map((pokemon, pokemonCount) => (
        <button key={pokemonCount} onClick={() => handleClick(pokemonCount)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
