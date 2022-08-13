import React, { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import WrapperGrid from "../../components/WrapperGrid";
import clientAxios from "../../config/clientAxios";
import filterList from "../../utils/filterList";
import { setInitialPokemons, setPokemons, setStatus } from "./pokemonSlice";

export default function Pokemons() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getPokemons = async () => {
      try {
        dispatch(setStatus("LOADING"));
        const data = await clientAxios.get("pokemon?limit=100000&offset=0");
        dispatch(setPokemons(data.data.results));
        dispatch(setInitialPokemons(data.data.results));
        dispatch(setStatus("SUCCESS"));
      } catch (error) {
        dispatch(setStatus("ERROR"));
      }
    };

    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pokemons = useAppSelector((state) => state.pokemons.pokemons);
  const initialPokemons = useAppSelector(
    (state) => state.pokemons.initialPokemons
  );
  const status = useAppSelector((state) => state.pokemons.status);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    dispatch(setPokemons(filterList(initialPokemons, value)));
  };
  return (
    <Wrapper status={status}>
      <div className="wrapper_title_search">
        <p>Pokemons</p>
        <Input placeholder="Search location" onChange={handleChange} />
      </div>
      {pokemons.length === 0 && <p className="no_results">No results</p>}
      {pokemons.length !== 0 && (
        <WrapperGrid>
          {pokemons.map((pokemon, i: number) => (
            <Card key={i}>
              <p>{pokemon.name}</p>
              <Button
                style={{
                  display: "initial",
                }}
                onClick={() => {
                  navigate(`/pokemon/${pokemon.name}`);
                }}
              >
                SEE MORE
              </Button>
            </Card>
          ))}
        </WrapperGrid>
      )}
    </Wrapper>
  );
}
