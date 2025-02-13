import clsx from "clsx";
import s from "./Image.module.css";
import { constructFilter } from "../utils";

export type ImageProps = {
  image: string;
  flipImage?: boolean;
  brightness?: number;
  contrast?: number;
  className?: string;
};

export const Image = ({
  image,
  flipImage,
  brightness,
  contrast,
  className,
}: ImageProps) => {
  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
        filter: constructFilter(brightness, contrast),
      }}
      className={clsx(s.image, flipImage && s.flip, className)}
    />
  );
};
