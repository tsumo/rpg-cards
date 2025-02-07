import { ReactNode, useMemo } from "react";
import clsx from "clsx";
import s from "./Sheet.module.css";

export type SheetProps = {
  itemsInRow: number;
  children?: ReactNode;
};

export const Sheet = ({ itemsInRow, children }: SheetProps) => {
  const gridTemplateColumns = useMemo(
    () => new Array(itemsInRow).fill("auto").join(" "),
    [itemsInRow]
  );

  return (
    <section className={clsx("sheet", s.sheet)}>
      <div className={s.grid} style={{ gridTemplateColumns }}>
        {children}
      </div>
    </section>
  );
};
