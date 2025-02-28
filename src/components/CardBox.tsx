import { CSSProperties } from "react";
import clsx from "clsx";
import { Text } from "./Text";
import { SvgPath } from "../utils/svgPath";
import facehuggerLogo from "../assets/facehugger_logo.png";
import s from "./CardBox.module.css";

type CardBoxProps = {
  title: string;
  thickness: number;
};

/*
+--+---------+--+
|  |         |  |
|  | back    |  |
|  |         |  |
|  |         |  |
+--+---------+--+
/  | bottom  |  \
+--+---------+--+
|  |         |  |
|  | front   |  |
|  |         |  |
|  |         |  |
+--+---------+--+
\__| top     |__/
   +---------+
   \ flap    /
    +-------+
*/

const long = 870 + 50;
const longInCm = `${long / 100}cm`;
const short = 550 + 60;
const shortInCm = `${short / 100}cm`;

export const CardBox = ({ title, thickness }: CardBoxProps) => {
  const thicknessInCm = `${thickness / 100}cm`;
  const totalWidth = thickness + short + thickness;
  const totalWidthInCmPlus = `${totalWidth / 100 + 0.04}cm`;
  const totalHeight = long + thickness + long + thickness + thickness;
  const totalHeightInCmPlus = `${totalHeight / 100 + 0.04}cm`;
  const sideFlapCoef = 0.3;
  const flapThickness = thickness * 0.6;

  const content = (
    <>
      <img src={facehuggerLogo} className={s.image} />
      <Text size="0.5cm">{title}</Text>
    </>
  );

  return (
    <div
      style={
        {
          "--width": shortInCm,
          "--height": longInCm,
          "--thickness": thicknessInCm,
        } as CSSProperties
      }
      className={s.box}
    >
      <svg
        width={totalWidthInCmPlus}
        height={totalHeightInCmPlus}
        viewBox={`-2 -2 ${totalWidth + 4} ${totalHeight + 4}`}
        fillOpacity={0}
        stroke="black"
      >
        {/* back */}
        <rect x={0} y={0} width={thickness} height={long} />
        <rect x={thickness} y={0} width={short} height={long} />
        <rect x={thickness + short} y={0} width={thickness} height={long} />

        {/* bottom */}
        <path
          d={new SvgPath()
            .M(0, long + thickness)
            .l(thickness * sideFlapCoef, -thickness)
            .finish()}
        />
        <rect x={thickness} y={long} width={short} height={thickness} />
        <path
          d={new SvgPath()
            .M(thickness + short + thickness, long + thickness)
            .l(-thickness * sideFlapCoef, -thickness)
            .finish()}
        />

        {/* front */}
        <rect x={0} y={long + thickness} width={thickness} height={long} />
        <rect x={thickness} y={long + thickness} width={short} height={long} />
        <rect
          x={thickness + short}
          y={long + thickness}
          width={thickness}
          height={long}
        />

        {/* top */}
        <path
          d={new SvgPath()
            .M(0, long + thickness + long)
            .l(thickness * sideFlapCoef, thickness)
            .l(thickness * (1 - sideFlapCoef), 0)
            .finish()}
        />
        <rect
          x={thickness}
          y={long + thickness + long}
          width={short}
          height={thickness}
        />
        <path
          d={new SvgPath()
            .M(thickness + short + thickness, long + thickness + long)
            .l(-thickness * sideFlapCoef, thickness)
            .l(-thickness * (1 - sideFlapCoef), 0)
            .finish()}
        />

        {/* flap */}
        <path
          d={new SvgPath()
            .M(thickness, long + thickness + long + thickness)
            .a(
              thickness / 2,
              flapThickness,
              0,
              0,
              0,
              thickness / 2,
              flapThickness
            )
            .l(short - thickness, 0)
            .a(
              thickness / 2,
              flapThickness,
              0,
              0,
              0,
              thickness / 2,
              -flapThickness
            )
            .finish()}
        />
      </svg>

      <div className={clsx(s.content, s.front)}>{content}</div>
      <div className={clsx(s.content, s.back)}>{content}</div>
    </div>
  );
};
