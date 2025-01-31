import s from "./CardStack.module.css";
import { StatLine } from "./StatLine";

type CardStackProps = {
  statsLeft: string[];
  statsRight: string[];
  image: string;
};

export const CardStack = ({ statsLeft, statsRight, image }: CardStackProps) => {
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
