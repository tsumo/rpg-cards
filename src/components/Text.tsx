import { forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";
import s from "./Text.module.css";

type TextProps = HTMLAttributes<HTMLDivElement> & {
  ocr?: boolean;
  size?: string | number;
  lineHeight?: string | number;
};

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ ocr, size, lineHeight, className, children, ...props }, ref) => {
    return (
      <div
        className={clsx(s.text, ocr ? s.ocr : s.gotham, className)}
        style={{ fontSize: size, lineHeight }}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
