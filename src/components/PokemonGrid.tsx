import { CircularProgress, Grid } from "@mui/material";
import usePokemonsList from "../hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import usePokemon from "../hooks/usePokemon";
import { useState, useContext } from "react";
import TypeSelector from "./TypeSelector";
import SearchContext from "../contexts/SearchContext";
import InfiniteScroll from "react-infinite-scroll-component";

const PokemonGrid = () => {
  const {
    data: pokemonList,
    error,
    fetchNextPage,
    hasNextPage,
  } = usePokemonsList();

  const allFetchedPokemons = useMemo(() => {
    if (!pokemonList) {
      return [];
    }
    return pokemonList.pages.flatMap((page) => page.results);
  }, [pokemonList]);
  console.log(allFetchedPokemons);

  const pokemons = usePokemon(allFetchedPokemons);

  const [selectedType, setSelectedType] = useState<string>("");

  const { searchText } = useContext(SearchContext);

  const isLoading = pokemons.some((pokemon) => pokemon.isLoading);

  if (error) return null;

  if (isLoading) return <CircularProgress />;

  const filteredPokemons =
    selectedType === "All"
      ? pokemons
      : pokemons.filter((poke) => {
          if (!selectedType) {
            return true;
          }
          return poke.data?.types.some(
            (type) => type.type.name === selectedType
          );
        });

  const searchPokemon = searchText
    ? filteredPokemons.filter((poke) =>
        poke.data?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : filteredPokemons;

  const fetchedPokemonsCount =
    pokemonList?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedPokemonsCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<CircularProgress />}
      style={{ overflow: "hidden" }}
    >
      <Grid container justifyContent="end">
        <Grid item xs={12} sm={6} md={4} lg={2} marginRight={3}>
          <TypeSelector setType={setSelectedType} type={selectedType} />
        </Grid>
        <Grid container spacing={5} padding={3}>
          {searchPokemon?.map((pokemon) => (
            <Grid key={pokemon.data?.id} item xs={12} sm={6} md={4} lg={2}>
              <PokemonCard pokemon={pokemon.data!}></PokemonCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </InfiniteScroll>
  );
};

export default PokemonGrid;
