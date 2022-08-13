import React, { ChangeEvent, useEffect, useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import WrapperGrid from "../../components/WrapperGrid";
import clientAxios from "../../config/clientAxios";
import filterList from "../../utils/filterList";

export default function Locations() {
  const [locations, setLocations] = useState<
    {
      url: string;
      name: string;
    }[]
  >([]);
  const [initialLocations, setInitialLocations] = useState<
    {
      url: string;
      name: string;
    }[]
  >([]);
  const [status, setStatus] = useState<"LOADING" | "SUCCESS" | "ERROR">(
    "LOADING"
  );
  useEffect(() => {
    const getLocations = async () => {
      try {
        setStatus("LOADING");
        const data = await clientAxios.get("location?limit=100000&offset=0");
        setLocations(data.data.results);
        setInitialLocations(data.data.results);
        setStatus("SUCCESS");
      } catch (error) {
        setStatus("ERROR");
      }
    };

    getLocations();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setLocations(filterList(initialLocations, value));
  };
  return (
    <Wrapper status={status}>
      <div className="wrapper_title_search">
        <p>Locations</p>
        <Input placeholder="Search location" onChange={handleChange} />
      </div>
      {locations.length === 0 && <p className="no_results">No results</p>}
      {locations.length !== 0 && (
        <WrapperGrid>
          {locations.map((location, i: number) => (
            <Card key={i}>{location.name}</Card>
          ))}
        </WrapperGrid>
      )}
    </Wrapper>
  );
}
