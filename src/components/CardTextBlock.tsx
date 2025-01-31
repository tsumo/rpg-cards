import { ReactNode } from "react";
import s from "./CardTextBlock.module.css";

export const CardTextBlock = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={s.block} lang="ru">
      {children}
    </div>
  );
};
