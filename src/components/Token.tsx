import { Image, ImageProps } from "./Image";
import s from "./Token.module.css";

type TokenProps = {
  size?: number | string;
} & ImageProps;

export const Token = ({ size = "1.5cm", ...imageProps }: TokenProps) => {
  return (
    <div style={{ width: size, height: size }} className={s.token}>
      <Image {...imageProps} />
    </div>
  );
};
