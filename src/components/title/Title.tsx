type Props = {
  title: string;
};

export default function Title({ title }: Props): JSX.Element {
  return <h1>{title}</h1>;
}

