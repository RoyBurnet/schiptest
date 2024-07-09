import { Flight } from "../../../types";
import "./style.css";

type Props = {
  flights: Flight[];
};
export default function List({ flights }: Props): JSX.Element {
  return (
    <ul className="list">
      {flights.map((flight) => (
        <li key={flight.flightIdentifier} className="list-item">
          <a
            href={flight.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {flight.flightNumber} - {flight.airport} - {flight.date} -{" "}
            {flight.expectedTime}
          </a>
        </li>
      ))}
    </ul>
  );
}
