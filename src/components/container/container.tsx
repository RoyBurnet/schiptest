import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props): JSX.Element {
  return <div className="container">{children}</div>;
}
