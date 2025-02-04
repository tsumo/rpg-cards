import { ReactNode } from "react";
import s from "./CardTextBlock.module.css";

type CardTextBlockProps = {
  children?: ReactNode;
};

export const CardTextBlock = ({ children }: CardTextBlockProps) => {
  return (
    <div className={s.block} lang="ru">
      {children}
    </div>
  );
};
