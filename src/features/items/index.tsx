import React, { ChangeEvent, useEffect, useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import WrapperGrid from "../../components/WrapperGrid";
import clientAxios from "../../config/clientAxios";
import { IStatus, ListResponse } from "../../interfaces/utils";
import filterList from "../../utils/filterList";

export default function Items() {
  const [initialItems, setInitialItems] = useState<ListResponse[]>([]);
  const [items, setItems] = useState<ListResponse[]>([]);
  const [status, setStatus] = useState<IStatus>("LOADING");
  useEffect(() => {
    const getItems = async () => {
      try {
        setStatus("LOADING");
        const data = await clientAxios.get("item?limit=100000&offset=0");
        setItems(data.data.results);
        setInitialItems(data.data.results);
        setStatus("SUCCESS");
      } catch (error) {
        setStatus("ERROR");
      }
    };

    getItems();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setItems(filterList(initialItems, value));
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
