import { CSSProperties, ReactNode, useMemo } from "react";
import clsx from "clsx";
import s from "./Sheet.module.css";

export type SheetProps = {
  itemsInRow: number;
  landscape?: boolean;
  children?: ReactNode;
};

const long = "297mm";
const short = "210mm";

export const Sheet = ({ itemsInRow, landscape, children }: SheetProps) => {
  const gridTemplateColumns = useMemo(
    () => `repeat(${itemsInRow}, auto)`,
    [itemsInRow]
  );

  const [width, height] = useMemo(
    () => (landscape ? [long, short] : [short, long]),
    [landscape]
  );

  return (
    <section
      className={clsx(s.sheet, landscape && s.landscape)}
      style={
        {
          "--page-width": width,
          "--page-height": height,
          page: landscape ? "landscape" : undefined,
        } as CSSProperties
      }
    >
      <div className={s.grid} style={{ gridTemplateColumns }}>
        {children}
      </div>
    </section>
  );
};
