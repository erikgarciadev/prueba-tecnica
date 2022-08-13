import React, { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import WrapperGrid from "../../components/WrapperGrid";
import clientAxios from "../../config/clientAxios";
import filterList from "../../utils/filterList";
import { setInitialItems, setItems, setStatus } from "./itemsSlice";

export default function Items() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getItems = async () => {
      try {
        dispatch(setStatus("LOADING"));
        const data = await clientAxios.get("item?limit=100000&offset=0");
        dispatch(setItems(data.data.results));
        dispatch(setInitialItems(data.data.results));
        dispatch(setStatus("SUCCESS"));
      } catch (error) {
        dispatch(setStatus("ERROR"));
      }
    };

    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const status = useAppSelector((state) => state.items.status);
  const items = useAppSelector((state) => state.items.items);
  const initialItems = useAppSelector((state) => state.items.initialItems);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    dispatch(setItems(filterList(initialItems, value)));
  };

  return (
    <Wrapper status={status}>
      <div className="wrapper_title_search">
        <p>Items</p>
        <Input placeholder="Search location" onChange={handleChange} />
      </div>
      {items.length === 0 && <p className="no_results">No results</p>}
      {items.length !== 0 && (
        <WrapperGrid>
          {items.map((item, i: number) => (
            <Card key={i}>{item.name}</Card>
          ))}
        </WrapperGrid>
      )}
    </Wrapper>
  );
}
