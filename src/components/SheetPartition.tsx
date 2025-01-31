import { Children, ReactNode } from "react";
import { partition } from "../utils";
import { Sheet } from "./Sheet";

type SheetPartitionProps = {
  n: number;
  children: ReactNode;
};

export const SheetPartition = ({ n, children }: SheetPartitionProps) => {
  const partitioned = partition(Children.toArray(children), n);

  return partitioned.map((c, i) => {
    return <Sheet key={i}>{c}</Sheet>;
  });
};
