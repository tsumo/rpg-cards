import s from "./CardTopImage.module.css";
import { StatLine } from "./StatLine";
import { Image, ImageProps } from "./Image";

type CardTopImageProps = {
  statsLeft: string[];
  statsRight: string[];
} & ImageProps;

export const CardTopImage = ({
  statsLeft,
  statsRight,
  ...imageProps
}: CardTopImageProps) => {
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
