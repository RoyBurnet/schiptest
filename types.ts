export type Flight = {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  date: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
}

export type ApiResponse = {
  flights: Flight[];
}

export type SortKey = "date" | "expectedTime";
export type SortOrder = "asc" | "desc";