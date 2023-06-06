import "./NavBar.css";

const Navbar = ({ pokeprops, pokelist }) => {
  const [pokemonCount, setPokemonCount] = pokeprops;
  console.log(pokemonCount);

  const handleClickSui = () =>
    setPokemonCount(
      pokemonCount < pokelist.length - 1 ? pokemonCount + 1 : pokemonCount
    );
  const handleClickPre = () =>
    setPokemonCount(pokemonCount > 0 ? pokemonCount - 1 : pokemonCount);

  const Pokemon = pokelist[pokemonCount];

  return (
    <div>
      {pokemonCount > 0 ? (
        <button onClick={handleClickPre}>Précédent</button>
      ) : undefined}
      {pokemonCount < pokelist.length - 1 ? (
        <button onClick={handleClickSui}>Suivant</button>
      ) : undefined}
    </div>
  );
};
export default Navbar;
