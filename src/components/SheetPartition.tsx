import { Children } from "react";
import { partition } from "../utils";
import { Sheet, SheetProps } from "./Sheet";

type SheetPartitionProps = SheetProps & {
  partitionBy: number;
};

export const SheetPartition = ({
  partitionBy,
  children,
  ...props
}: SheetPartitionProps) => {
  const partitioned = partition(Children.toArray(children), partitionBy);

  return partitioned.map((c, i) => {
    return (
      <Sheet key={i} {...props}>
        {c}
      </Sheet>
    );
  });
};
