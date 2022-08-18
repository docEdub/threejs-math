import { Base } from './Base';

export declare type ColorRepresentation = Color | string | number;
/** @deprecated Use ColorRepresentation */
export declare type IColor = ColorRepresentation;
export interface HSL {
  h: number;
  s: number;
  l: number;
}
export declare class Color extends Base {
  static readonly NAMES: {
      aliceblue: number;
      antiquewhite: number;
      aqua: number;
      aquamarine: number;
      azure: number;
      beige: number;
      bisque: number;
      black: number;
      blanchedalmond: number;
      blue: number;
      blueviolet: number;
      brown: number;
      burlywood: number;
      cadetblue: number;
      chartreuse: number;
      chocolate: number;
      coral: number;
      cornflowerblue: number;
      cornsilk: number;
      crimson: number;
      cyan: number;
      darkblue: number;
      darkcyan: number;
      darkgoldenrod: number;
      darkgray: number;
      darkgreen: number;
      darkgrey: number;
      darkkhaki: number;
      darkmagenta: number;
      darkolivegreen: number;
      darkorange: number;
      darkorchid: number;
      darkred: number;
      darksalmon: number;
      darkseagreen: number;
      darkslateblue: number;
      darkslategray: number;
      darkslategrey: number;
      darkturquoise: number;
      darkviolet: number;
      deeppink: number;
      deepskyblue: number;
      dimgray: number;
      dimgrey: number;
      dodgerblue: number;
      firebrick: number;
      floralwhite: number;
      forestgreen: number;
      fuchsia: number;
      gainsboro: number;
      ghostwhite: number;
      gold: number;
      goldenrod: number;
      gray: number;
      green: number;
      greenyellow: number;
      grey: number;
      honeydew: number;
      hotpink: number;
      indianred: number;
      indigo: number;
      ivory: number;
      khaki: number;
      lavender: number;
      lavenderblush: number;
      lawngreen: number;
      lemonchiffon: number;
      lightblue: number;
      lightcoral: number;
      lightcyan: number;
      lightgoldenrodyellow: number;
      lightgray: number;
      lightgreen: number;
      lightgrey: number;
      lightpink: number;
      lightsalmon: number;
      lightseagreen: number;
      lightskyblue: number;
      lightslategray: number;
      lightslategrey: number;
      lightsteelblue: number;
      lightyellow: number;
      lime: number;
      limegreen: number;
      linen: number;
      magenta: number;
      maroon: number;
      mediumaquamarine: number;
      mediumblue: number;
      mediumorchid: number;
      mediumpurple: number;
      mediumseagreen: number;
      mediumslateblue: number;
      mediumspringgreen: number;
      mediumturquoise: number;
      mediumvioletred: number;
      midnightblue: number;
      mintcream: number;
      mistyrose: number;
      moccasin: number;
      navajowhite: number;
      navy: number;
      oldlace: number;
      olive: number;
      olivedrab: number;
      orange: number;
      orangered: number;
      orchid: number;
      palegoldenrod: number;
      palegreen: number;
      paleturquoise: number;
      palevioletred: number;
      papayawhip: number;
      peachpuff: number;
      peru: number;
      pink: number;
      plum: number;
      powderblue: number;
      purple: number;
      rebeccapurple: number;
      red: number;
      rosybrown: number;
      royalblue: number;
      saddlebrown: number;
      salmon: number;
      sandybrown: number;
      seagreen: number;
      seashell: number;
      sienna: number;
      silver: number;
      skyblue: number;
      slateblue: number;
      slategray: number;
      slategrey: number;
      snow: number;
      springgreen: number;
      steelblue: number;
      tan: number;
      teal: number;
      thistle: number;
      tomato: number;
      turquoise: number;
      violet: number;
      wheat: number;
      white: number;
      whitesmoke: number;
      yellow: number;
      yellowgreen: number;
  };
  r: number;
  g: number;
  b: number;
  constructor(color?: ColorRepresentation);
  constructor(r: number, g: number, b: number);
  get isColor(): boolean;
  set(value: ColorRepresentation): Color;
  setScalar(scalar: number): this;
  setHex(hex: number): this;
  setRGB(r: number, g: number, b: number): this;
  setHSL(h: number, s: number, l: number): this;
  setStyle(style: string): this;
  setColorName(style: string): this;
  clone(): Color;
  copy(color: Color): this;
  copyGammaToLinear(color: Color, gammaFactor?: number): this;
  copyLinearToGamma(color: Color, gammaFactor?: number): this;
  convertGammaToLinear(gammaFactor?: number): this;
  convertLinearToGamma(gammaFactor?: number): this;
  copySRGBToLinear(color: Color): this;
  copyLinearToSRGB(color: Color): this;
  convertSRGBToLinear(): this;
  convertLinearToSRGB(): this;
  getHex(): number;
  getHexString(): string;
  getHSL(target?: HSL): HSL;
  getStyle(): string;
  offsetHSL(h: number, s: number, l: number): this;
  add(color: Color): this;
  addColors(color1: Color, color2: Color): this;
  addScalar(s: number): this;
  sub(color: Color): this;
  multiply(color: Color): this;
  multiplyScalar(s: number): this;
  lerp(color: Color, alpha: number): this;
  lerpColors(color1: Color, color2: Color, alpha: number): this;
  lerpHSL(color: Color, alpha: number): this;
  equals(c: Color): boolean;
  /**
   * Sets this color's red, green and blue value from the provided array or array-like.
   * @param array the source array or array-like.
   * @param offset (optional) offset into the array-like. Default is 0.
  */
  fromArray(array: number[], offset?: number): this;
  /**
   * Returns an array [red, green, blue], or copies red, green and blue into the provided array.
   * @param array (optional) array to store the color to. 
   *    If this is not provided, a new array will be created.
   * @param offset (optional) optional offset into the array.
   * @return The created or provided array.
   */
  toArray(array?: number[], offset?: number): number[];
  toJSON(): number;
  [Symbol.iterator](): IterableIterator<number>;
}
