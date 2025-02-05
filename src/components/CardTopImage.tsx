import s from "./CardTopImage.module.css";
import { StatLine } from "./StatLine";

type CardTopImageProps = {
  statsLeft: string[];
  statsRight: string[];
  image: string;
};

export const CardTopImage = ({
  statsLeft,
  statsRight,
  image,
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
      <div className={s.image} style={{ backgroundImage: `url("${image}")` }} />
    </div>
  );
};
