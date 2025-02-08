import { ReactNode, useMemo } from "react";
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
    <section className={s.sheet}>
      <div className={s.grid} style={{ gridTemplateColumns }}>
        {children}
      </div>
    </section>
  );
};
