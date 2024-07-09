import { Flight, SortKey, SortOrder } from "../../types";

const filterFlights = (
  flights: Flight[],
  searchTerm: string,
  sortKey: SortKey,
  sortOrder: SortOrder
):  Flight[] => {
  if (searchTerm.length < 3) return [];

  return flights
    .filter((flight) =>
      flight.airport.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const comparison = a[sortKey].localeCompare(b[sortKey]);
      return sortOrder === "asc" ? comparison : -comparison;
    })
    .slice(0, 5);
};

export default filterFlights