import clsx from "clsx";
import s from "./CardSideBySide.module.css";
import { StatLine } from "./StatLine";

type CardSideBySideProps = {
  stats: string[];
  image: string;
  flipImage?: boolean;
  columns?: string;
};

export const CardSideBySide = ({
  stats,
  image,
  flipImage,
  columns,
}: CardSideBySideProps) => {
  return (
    <div className={s.block} style={{ gridTemplateColumns: columns }}>
      <div>
        {stats.map((stat) => (
          <StatLine key={stat} stat={stat} />
        ))}
      </div>
      <img className={clsx(flipImage && s.flip, s.image)} src={image} />
    </div>
  );
};
