import { ReactNode } from "react";
import { Card, CardProps } from "./Card";

type CardPairProps = Omit<CardProps, "children"> & {
  left: ReactNode;
  right: ReactNode;
};

export const CardPair = ({ left, right, ...props }: CardPairProps) => {
  return (
    <>
      <Card {...props}>{left}</Card>
      <Card printUpsideDown={props.vertical} {...props}>
        {right}
      </Card>
    </>
  );
};
