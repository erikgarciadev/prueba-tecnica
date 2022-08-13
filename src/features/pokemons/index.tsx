import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import WrapperGrid from "../../components/WrapperGrid";
import clientAxios from "../../config/clientAxios";
import filterList from "../../utils/filterList";

export default function Pokemons() {
  const navigate = useNavigate();
  const [initialPokemons, setInitialPokemons] = useState<
    {
      url: string;
      name: string;
    }[]
  >([]);
  const [pokemons, setPokemons] = useState<
    {
      url: string;
      name: string;
    }[]
  >([]);
  const [status, setStatus] = useState<"LOADING" | "SUCCESS" | "ERROR">(
    "LOADING"
  );
  useEffect(() => {
    const getPokemons = async () => {
      try {
        setStatus("LOADING");
        const data = await clientAxios.get("pokemon?limit=100000&offset=0");
        setPokemons(data.data.results);
        setInitialPokemons(data.data.results);
        setStatus("SUCCESS");
      } catch (error) {
        setStatus("ERROR");
      }
    };

    getPokemons();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setPokemons(filterList(initialPokemons, value));
  };
  return (
    <Wrapper status={status}>
      <div className="wrapper_title_search">
        <p>Pokemon</p>
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
