import { Children } from "react";
import { partition } from "../utils";
import { Sheet, SheetProps } from "./Sheet";

type SheetPartitionProps = SheetProps & {
  partitionBy: number;
};

export const SheetPartition = ({
  itemsInRow,
  partitionBy,
  children,
}: SheetPartitionProps) => {
  const partitioned = partition(Children.toArray(children), partitionBy);

  return partitioned.map((c, i) => {
    return (
      <Sheet key={i} itemsInRow={itemsInRow}>
        {c}
      </Sheet>
    );
  });
};
