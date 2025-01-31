import clsx from "clsx";
import s from "./CardSideBySide.module.css";
import { StatLine } from "./StatLine";
import { constructFilter } from "../utils";

type CardSideBySideProps = {
  stats: string[];
  image: string;
  flipImage?: boolean;
  brightness?: number;
  contrast?: number;
  columns?: string;
};

export const CardSideBySide = ({
  stats,
  image,
  flipImage,
  brightness,
  contrast,
  columns,
}: CardSideBySideProps) => {
  return (
    <div className={s.block} style={{ gridTemplateColumns: columns }}>
      <div>
        {stats.map((stat) => (
          <StatLine key={stat} stat={stat} />
        ))}
      </div>
      <img
        className={clsx(flipImage && s.flip, s.image)}
        style={{ filter: constructFilter(brightness, contrast) }}
        src={image}
      />
    </div>
  );
};
