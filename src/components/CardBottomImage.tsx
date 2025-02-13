import s from "./CardBottomImage.module.css";
import { StatLine } from "./StatLine";
import { Image, ImageProps } from "./Image";

type CardBottomImageProps = {
  statsLeft: string[];
  statsRight: string[];
} & ImageProps;

export const CardBottomImage = ({
  statsLeft,
  statsRight,
  ...imageProps
}: CardBottomImageProps) => {
  return (
    <div className={s.block}>
      <div className={s.stats}>
        <div>
          {statsLeft.map((stat) => (
            <StatLine key={stat} stat={stat} />
          ))}
        </div>
        <div>
          {statsRight.map((stat) => (
            <StatLine key={stat} stat={stat} />
          ))}
        </div>
      </div>
      <Image {...imageProps} />
    </div>
  );
};
