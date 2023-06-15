import { useColor } from "color-thief-react";

export const getTextColorByBackgroundColor = (hexColor: string) => {
  const c = hexColor.substring(1);
  const rgb = parseInt(c, 16);
  const red = (rgb >> 16) & 0xff;
  const green = (rgb >> 8) & 0xff;
  const bule = (rgb >> 0) & 0xff;
  const luma = 0.2126 * red + 0.7152 * green + 0.0722 * bule; // per ITU-R BT.709
  return luma < 127.5 ? "white" : "black";
};

export const useGetPrimeColor = (src: string) => {
  const color = useColor(src, "hex");
}