import { CSSProperties, ReactNode, useId, useMemo } from "react";
import useMeasure from "react-use-measure";
import clsx from "clsx";
import { Text } from "./Text";
import { SvgPath } from "../utils/svgPath";
import s from "./Card.module.css";

const long = 870;
const short = 550;
const longInCm = `${long / 100}cm`;
const shortInCm = `${short / 100}cm`;

const edgeOffset = 40;
const cornerOffset = 30;
const headingHeight = 50;

const createPath = (width: number, height: number, headingWidth: number) => {
  return (
    new SvgPath()
      // heading start
      .M(width - edgeOffset - cornerOffset - headingWidth, edgeOffset)
      // top right corner
      .L(width - edgeOffset - cornerOffset, edgeOffset)
      .L(width - edgeOffset, edgeOffset + cornerOffset)
      // bottom right corner
      .L(width - edgeOffset, height - edgeOffset - cornerOffset)
      .L(width - edgeOffset - cornerOffset, height - edgeOffset)
      // bottom left corner
      .L(edgeOffset + cornerOffset, height - edgeOffset)
      .L(edgeOffset, height - edgeOffset - cornerOffset)
      // top left corner
      .L(edgeOffset, edgeOffset + cornerOffset + headingHeight)
      .L(edgeOffset + cornerOffset, edgeOffset + headingHeight)
      // line to heading
      .L(
        width - edgeOffset - cornerOffset - headingWidth - headingHeight,
        edgeOffset + headingHeight
      )
      .Z()
  );
};

const pathThickness = 5;
const outlineOffset = 10;
const outlineThickness = 4;

export type CardProps = {
  heading: string;
  headingSize?: string;
  vertical?: boolean;
  printUpsideDown?: boolean;
  children?: ReactNode;
};

export const Card = ({
  heading,
  headingSize = "3.1mm",
  vertical,
  printUpsideDown,
  children,
}: CardProps) => {
  const id = useId();

  const [cardRef, cardBounds] = useMeasure();
  const [headingRef, headingBounds] = useMeasure();

  const { width, height, widthInCm, heightInCm } = useMemo(() => {
    if (vertical) {
      return {
        width: short,
        height: long,
        widthInCm: shortInCm,
        heightInCm: longInCm,
      };
    }
    return {
      width: long,
      height: short,
      widthInCm: longInCm,
      heightInCm: shortInCm,
    };
  }, [vertical]);

  const path = useMemo(
    () =>
      createPath(
        width,
        height,
        (headingBounds.width / cardBounds.width) * width
      ),
    [width, height, headingBounds.width, cardBounds.width]
  );

  return (
    <div
      ref={cardRef}
      className={clsx(s.card, printUpsideDown && s.rotated)}
      style={{ "--width": widthInCm, "--height": heightInCm } as CSSProperties}
    >
      <Text ocr size={headingSize} ref={headingRef} className={s.heading}>
        {heading}
      </Text>

      <div className={s.content}>{children}</div>

      <svg
        width={widthInCm}
        height={heightInCm}
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <path id={id} d={path} />

          <mask id={`${id}-mask`}>
            <rect x={0} y={0} width={width} height={height} fill="white" />
            <use xlinkHref={`#${id}`} fill="black" />
          </mask>
        </defs>

        <use
          xlinkHref={`#${id}`}
          stroke="black"
          strokeWidth={pathThickness + outlineOffset + outlineThickness}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          mask={`url(#${id}-mask)`}
        />
        <use
          xlinkHref={`#${id}`}
          stroke="white"
          strokeWidth={pathThickness + outlineOffset}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          mask={`url(#${id}-mask)`}
        />
        <use
          xlinkHref={`#${id}`}
          fill="transparent"
          stroke="black"
          strokeWidth={pathThickness}
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
};
