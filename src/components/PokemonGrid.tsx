import { CircularProgress, Grid } from "@mui/material";
import usePokemonsList from "../hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import usePokemon from "../hooks/usePokemon";
import { useState, useContext, useMemo } from "react";
import TypeSelector from "./TypeSelector";
import SearchContext from "../contexts/SearchContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { filterPokemonsByType } from "../Utilities/FilterPokemons";
import { SearchPokemon } from "../Utilities/SearchPokemon";

const PokemonGrid = () => {
  const [selectedType, setSelectedType] = useState<string>("");
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

  const pokemons = usePokemon(allFetchedPokemons);

  const { searchText } = useContext(SearchContext);

  if (error) return null;

  const filteredPokemons = filterPokemonsByType({ pokemons, selectedType });

  const searchPokemon = SearchPokemon({ filteredPokemons, searchText });

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
          {searchPokemon
            ?.filter((pokemon) => !pokemon.isLoading)
            ?.map((pokemon) => (
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
