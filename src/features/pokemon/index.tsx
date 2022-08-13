import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import clientAxios from "../../config/clientAxios";
import { FaArrowLeft } from "react-icons/fa";

export default function Pokemon() {
  const navigate = useNavigate();
  const {name } = useParams()
  const [status, setStatus] = useState<"LOADING" | "SUCCESS" | "ERROR">(
    "LOADING"
  );
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPokemon = async () => {
      try {
        setStatus("LOADING");
        const data = await clientAxios.get(`pokemon/${name}`);
        setPokemon(data.data)
        setStatus("SUCCESS");
      } catch (error) {
        setStatus("ERROR");
      }
    };

    getPokemon();
  }, [name]);
  return (
    <Wrapper status={status}>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <FaArrowLeft fontSize='20px' color='#383b4f' />
        BACK
      </Button>
      <div>
        <div>

        </div>
        <div>
            
        </div>
      </div>
    </Wrapper>
  );
}
