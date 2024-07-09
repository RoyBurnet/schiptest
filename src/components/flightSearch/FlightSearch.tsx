import React, { useState, useEffect } from "react";
import { Flight, ApiResponse, SortKey, SortOrder } from "../../../types";
import filterFlights from "../../helpers/filterFlights";
import InputField from "../inputField/InputField";
import Title from "../title/Title";
import Button from "../button/Button";
import List from "../list/List";
import Container from "../container/Container";

import "./style.css";

const FlightSearch = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);

      try {
        const response = await fetch("/flights.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();

        setFlights(data.flights);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const filteredFlights = filterFlights(
    flights,
    searchTerm,
    sortKey,
    sortOrder
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key: SortKey): void => {
    const newSortOrder =
      sortKey === key ? (sortOrder === "asc" ? "desc" : "asc") : "asc";

    setSortKey(key);
    setSortOrder(newSortOrder);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Title title="Flight Search" />
      <InputField searchTerm={searchTerm} handleSearch={handleSearch} />
      <Button handleSort={() => handleSort("date")} title="Sort by Date" />
      <Button
        handleSort={() => handleSort("expectedTime")}
        title="Sort by Time"
      />
      <List flights={filteredFlights} />
    </Container>
  );
};

export default FlightSearch;
