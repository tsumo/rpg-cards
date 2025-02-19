type CardBoxProps = {
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
const short = 550 + 50;

export const CardBox = ({ thickness }: CardBoxProps) => {
  const width = thickness + short + thickness;
  const widthInCm = `${width / 100}cm`;
  const height = long + thickness + long + thickness + thickness;
  const heightInCm = `${height / 100}cm`;
  const sideFlapCoef = 0.3;

  return (
    <div>
      <svg
        width={widthInCm}
        height={heightInCm}
        viewBox={`-2 -2 ${width + 4} ${height + 4}`}
        fillOpacity={0}
        stroke="black"
      >
        {/* back */}
        <rect x={0} y={0} width={thickness} height={long} />
        <rect x={thickness} y={0} width={short} height={long} />
        <rect x={thickness + short} y={0} width={thickness} height={long} />

        {/* bottom */}
        <path
          d={[
            `M 0 ${long + thickness}`,
            `l ${thickness * sideFlapCoef} ${-thickness}`,
          ].join(" ")}
        />
        <rect x={thickness} y={long} width={short} height={thickness} />
        <path
          d={[
            `M ${thickness + short + thickness} ${long + thickness}`,
            `l ${-thickness * sideFlapCoef} ${-thickness}`,
          ].join(" ")}
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
          d={[
            `M 0 ${long + thickness + long}`,
            `l ${thickness * sideFlapCoef} ${thickness}`,
            `l ${thickness * (1 - sideFlapCoef)} 0`,
          ].join(" ")}
        />
        <rect
          x={thickness}
          y={long + thickness + long}
          width={short}
          height={thickness}
        />
        <path
          d={[
            `M ${thickness + short + thickness} ${long + thickness + long}`,
            `l ${-thickness * sideFlapCoef} ${thickness}`,
            `l ${-thickness * (1 - sideFlapCoef)} 0`,
          ].join(" ")}
        />

        {/* flap */}
        <path
          d={[
            `M ${thickness} ${long + thickness + long + thickness}`,
            `a${thickness},${thickness} 0 0 0 ${thickness / 2},${thickness}`,
            `l ${short - thickness} 0`,
            `a${thickness},${thickness} 0 0 0 ${thickness / 2},${-thickness}`,
          ].join(" ")}
        />
      </svg>
    </div>
  );
};
