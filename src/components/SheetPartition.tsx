import { Children } from "react";
import { partition } from "../utils";
import { Sheet, SheetProps } from "./Sheet";

type SheetPartitionProps = SheetProps & {
  partitionBy: number;
};

export const SheetPartition = ({
  title,
  partitionBy,
  children,
  ...props
}: SheetPartitionProps) => {
  const partitioned = partition(Children.toArray(children), partitionBy);

  return partitioned.map((c, i) => {
    return (
      <Sheet
        key={i}
        title={title && `${title} ${i + 1}/${partitioned.length}`}
        {...props}
      >
        {c}
      </Sheet>
    );
  });
};
