import { ComponentProps } from "react";
import clsx from "clsx";
import { Text } from "./Text";
import s from "./StatLine.module.css";

type StatLineProps = {
  stat: string;
} & ComponentProps<typeof Text>;

export const StatLine = ({ stat, className, ...props }: StatLineProps) => {
  if (stat.includes(":")) {
    const i = stat.indexOf(":");
    const title = stat.slice(0, i);
    const value = stat.slice(i, stat.length);
    return (
      <Text
        key={stat}
        size="2.3mm"
        className={clsx(s.line, className)}
        {...props}
      >
        <span className={s.bold}>{title}</span> {value}
      </Text>
    );
  }

  return (
    <Text
      key={stat}
      size="2.3mm"
      className={clsx(s.line, className)}
      {...props}
    >
      {stat}
    </Text>
  );
};
