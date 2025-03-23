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
        <path
          d={new SvgPath()
            .M(thickness, long)
            .L(0, long)
            .L(0, 0)
            .L(thickness + short + thickness, 0)
            .L(thickness + short + thickness, long)
            .L(thickness + short, long)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(thickness, 0)
            .L(thickness, long)
            .L(thickness + short, long)
            .L(thickness + short, 0)
            .finish()}
          strokeDasharray="3mm"
        />

        {/* bottom */}
        <path
          d={new SvgPath()
            .M(0, long + thickness)
            .l(thickness * sideFlapCoef, -thickness)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(thickness, long)
            .L(thickness, long + thickness)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(0, long + thickness)
            .L(thickness + short + thickness, long + thickness)
            .finish()}
          strokeDasharray="3mm"
        />
        <path
          d={new SvgPath()
            .M(thickness + short, long)
            .L(thickness + short, long + thickness)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(thickness + short + thickness, long + thickness)
            .l(-thickness * sideFlapCoef, -thickness)
            .finish()}
        />

        {/* front */}
        <path
          d={new SvgPath()
            .M(0, long + thickness)
            .L(0, long + thickness + long)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(thickness, long + thickness)
            .L(thickness, long + thickness + long)
            .finish()}
          strokeDasharray="3mm"
        />
        <path
          d={new SvgPath()
            .M(0, long + thickness + long)
            .L(thickness + short + thickness, long + thickness + long)
            .finish()}
          strokeDasharray="3mm"
        />
        <path
          d={new SvgPath()
            .M(thickness + short, long + thickness)
            .L(thickness + short, long + thickness + long)
            .finish()}
          strokeDasharray="3mm"
        />
        <path
          d={new SvgPath()
            .M(thickness + short + thickness, long + thickness)
            .L(thickness + short + thickness, long + thickness + long)
            .finish()}
        />

        {/* top */}
        <path
          d={new SvgPath()
            .M(0, long + thickness + long)
            .l(thickness * (sideFlapCoef * 0.1), thickness * 0.3)
            .l(thickness * (sideFlapCoef * 0.9), thickness * 0.7)
            .L(thickness, long + thickness + long + thickness)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(thickness, long + thickness + long)
            .L(thickness, long + thickness + long + thickness)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(thickness, long + thickness + long + thickness)
            .L(thickness + short, long + thickness + long + thickness)
            .finish()}
          strokeDasharray="3mm"
        />
        <path
          d={new SvgPath()
            .M(thickness + short, long + thickness + long)
            .L(thickness + short, long + thickness + long + thickness)
            .finish()}
        />
        <path
          d={new SvgPath()
            .M(thickness + short + thickness, long + thickness + long)
            .l(-thickness * (sideFlapCoef * 0.1), thickness * 0.3)
            .l(-thickness * (sideFlapCoef * 0.9), thickness * 0.7)
            .L(thickness + short, long + thickness + long + thickness)
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
