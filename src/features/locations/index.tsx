import React, { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import WrapperGrid from "../../components/WrapperGrid";
import clientAxios from "../../config/clientAxios";
import filterList from "../../utils/filterList";
import { setInitialLocations, setLocations, setStatus } from "./locationsSlice";

export default function Locations() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getLocations = async () => {
      try {
        dispatch(setStatus('LOADING'))
        const data = await clientAxios.get("location?limit=100000&offset=0");
        dispatch(setLocations(data.data.results));
        setInitialLocations(data.data.results);
        dispatch(setStatus('SUCCESS'))
      } catch (error) {
        dispatch(setStatus('ERROR'))
      }
    };

    getLocations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const status = useAppSelector((state) => state.locations.status)
  const locations = useAppSelector((state) => state.locations.locations)
  const initialLocations = useAppSelector(state => state.locations.initialLocations)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    dispatch(setLocations(filterList(initialLocations, value)));
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
