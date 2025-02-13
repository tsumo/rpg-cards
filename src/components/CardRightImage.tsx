import s from "./CardRightImage.module.css";
import { StatLine } from "./StatLine";
import { Image, ImageProps } from "./Image";

type CardRightImageProps = {
  stats: string[];
  columns?: string;
} & ImageProps;

export const CardRightImage = ({
  stats,
  columns,
  ...imageProps
}: CardRightImageProps) => {
  return (
    <div className={s.block} style={{ gridTemplateColumns: columns }}>
      <div>
        {stats.map((stat) => (
          <StatLine key={stat} stat={stat} />
        ))}
      </div>
      <Image {...imageProps} />
    </div>
  );
};
