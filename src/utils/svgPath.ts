export class SvgPath {
  private path = "";

  /** Move to absolute */
  public M(x: number, y: number) {
    this.path += ` M ${x} ${y}`;
    return this;
  }

  /** Line to absolute */
  public L(x: number, y: number) {
    this.path += ` L ${x} ${y}`;
    return this;
  }

  /** Line to relative */
  public l(dx: number, dy: number) {
    this.path += ` l ${dx} ${dy}`;
    return this;
  }

  /** Arc */
  public a(
    rx: number,
    ry: number,
    xAxisRotation: number,
    largeArcFlag: 0 | 1,
    sweepFlag: 0 | 1,
    dx: number,
    dy: number
  ) {
    this.path += ` a ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${dx} ${dy}`;
    return this;
  }

  /** Close path */
  public Z() {
    this.path += " Z";
    return this.finish();
  }

  public finish() {
    return this.path.trim();
  }
}
