import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import clientAxios from "../../config/clientAxios";
import { FaArrowLeft } from "react-icons/fa";
import { IPokemon } from "../../interfaces/Pokemon";
import { IStatus } from "../../interfaces/utils";
import styles from "./pokemon.module.css";
import { POKEMON_TYPE_COLORS } from "../../config/constants";
import Badge from "../../components/Badge";

export default function Pokemon() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [status, setStatus] = useState<IStatus>("LOADING");
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  useEffect(() => {
    const getPokemon = async () => {
      try {
        setStatus("LOADING");
        const data = await clientAxios.get<IPokemon>(`pokemon/${name}`);
        setPokemon(data.data);
        setStatus("SUCCESS");
      } catch (error) {
        setStatus("ERROR");
      }
    };

    getPokemon();
  }, [name]);

  console.log(pokemon);
  return (
    <Wrapper status={status}>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <FaArrowLeft fontSize="20px" color="#383b4f" />
        BACK
      </Button>
      <div className={styles.wrapperInformation}>
        <div className={styles.wrapperInformationLeft}>
          <img alt="front_image" src={pokemon?.sprites.front_default} />
          <img alt="front_image" src={pokemon?.sprites.back_default} />
          <img alt="front_image" src={pokemon?.sprites.front_shiny} />
          <img alt="front_image" src={pokemon?.sprites.back_shiny} />
        </div>
        <div className={styles.wrapperInformationRight}>
          <div className={styles.wrapperTop}>
            <p>{pokemon?.name}</p>
            <p>{`#${pokemon?.order}`}</p>
          </div>
          <div className={styles.wrapperType}>
            {pokemon?.types.map((data, i) => (
              <Badge backgroundColor={POKEMON_TYPE_COLORS[data.type.name!]}>
                {data.type.name}
              </Badge>
            ))}
          </div>
          <div>
            <div className={styles.information}>
              <label>height :</label>
              <p>{pokemon?.height}</p>
            </div>
            <div className={styles.information}>
              <label>weight :</label>
              <p>{pokemon?.weight}</p>
            </div>
          </div>
          <div className={styles.wrapperAbilities}>
            <p>Abilities</p>
            <div>
              {pokemon?.abilities.map((data, i) => (
                <Badge key={i}>{data?.ability.name}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
