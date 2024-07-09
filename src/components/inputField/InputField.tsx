import React from "react";
import "./style.css";

type Props = {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  searchTerm,
  handleSearch,
}: Props): JSX.Element {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Enter destination airport"
      className="input"
    />
  );
}
