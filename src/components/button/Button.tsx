import "./style.css";

type Props = {
  handleSort: (sortType: string) => void;
  title: string;
};

export default function Button({ handleSort, title }: Props): JSX.Element {
  return (
    <button onClick={() => handleSort("date")} className="btn">
      {title}
    </button>
  );
}
