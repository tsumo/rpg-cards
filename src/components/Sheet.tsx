import { ReactNode } from "react";
import clsx from "clsx";
import s from "./Sheet.module.css";

export const Sheet = (props: { children?: ReactNode }) => {
  return (
    <section className={clsx("sheet", s.sheet)}>
      <div className={s.grid}>{props.children}</div>
    </section>
  );
};
