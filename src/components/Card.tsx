import { CSSProperties, ReactNode, useId, useMemo } from "react";
import { Text } from "./Text";
import s from "./Card.module.css";

const width = 860;
const height = 550;
const widthInCm = `${width / 100}cm`;
const heightInCm = `${height / 100}cm`;

const edgeOffset = 40;
const cornerOffset = 30;
const headingHeight = 50;

const createPath = (headingWidth: number) => {
  const points: { x: number; y: number }[] = [];

  // heading start
  points.push({
    x: width - edgeOffset - cornerOffset - headingWidth,
    y: edgeOffset,
  });
  // top right corner
  points.push({ x: width - edgeOffset - cornerOffset, y: edgeOffset });
  points.push({ x: width - edgeOffset, y: edgeOffset + cornerOffset });
  // bottom right corner
  points.push({ x: width - edgeOffset, y: height - edgeOffset - cornerOffset });
  points.push({ x: width - edgeOffset - cornerOffset, y: height - edgeOffset });
  // bottom left corner
  points.push({ x: edgeOffset + cornerOffset, y: height - edgeOffset });
  points.push({ x: edgeOffset, y: height - edgeOffset - cornerOffset });
  // top left corner
  points.push({ x: edgeOffset, y: edgeOffset + cornerOffset + headingHeight });
  points.push({ x: edgeOffset + cornerOffset, y: edgeOffset + headingHeight });
  // line to heading
  points.push({
    x: width - edgeOffset - cornerOffset - headingWidth - headingHeight,
    y: edgeOffset + headingHeight,
  });

  const path = points.reduce((prev, curr, i) => {
    if (i === 0) return `M ${curr.x} ${curr.y}`;
    return `${prev} L ${curr.x} ${curr.y}`;
  }, "");

  return `${path} Z`;
};

const pathThickness = 5;
const outlineOffset = 10;
const outlineThickness = 4;

type CardProps = {
  heading: string;
  headingWidth: number;
  headingSize?: string;
  children?: ReactNode;
};

export const Card = ({
  heading,
  headingWidth,
  headingSize = "3.1mm",
  children,
}: CardProps) => {
  const id = useId();
  const path = useMemo(() => createPath(headingWidth), [headingWidth]);

  return (
    <div
      className={s.card}
      style={{ "--width": widthInCm, "--height": heightInCm } as CSSProperties}
    >
      <Text ocr size={headingSize} className={s.heading}>
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
