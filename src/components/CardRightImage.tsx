import clsx from "clsx";
import s from "./CardRightImage.module.css";
import { StatLine } from "./StatLine";
import { constructFilter } from "../utils";

type CardRightImageProps = {
  stats: string[];
  image: string;
  flipImage?: boolean;
  brightness?: number;
  contrast?: number;
  columns?: string;
};

export const CardRightImage = ({
  stats,
  image,
  flipImage,
  brightness,
  contrast,
  columns,
}: CardRightImageProps) => {
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
