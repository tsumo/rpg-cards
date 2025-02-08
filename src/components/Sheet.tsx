import { CSSProperties, ReactNode, useMemo } from "react";
import clsx from "clsx";
import s from "./Sheet.module.css";

export type SheetProps = {
  landscape?: boolean;
  children?: ReactNode;
};

const long = "297mm";
const short = "210mm";

export const Sheet = ({ landscape, children }: SheetProps) => {
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
      <div
        className={s.grid}
        style={{
          flexDirection: landscape ? "column" : "row",
        }}
      >
        {children}
      </div>
    </section>
  );
};
