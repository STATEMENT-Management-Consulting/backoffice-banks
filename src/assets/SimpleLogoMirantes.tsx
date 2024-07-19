import { SVGProps } from "react";
export const SimpleLogoMirantes = ({
  color = "#016392",
  ...props
}: {
  color?: string;
} & SVGProps<SVGSVGElement>) => (
  <svg
    widths="249"
    xHeight="285"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 249 285"
    {...props}
  >
    <path
      d="M0 0H32.7632C54.4768 0 72.0791 14.7069 72.0791 32.8488V284.69H39.3159C17.6023 284.69 0 269.983 0 251.841V0Z"
      fill={color}
    />
    <path
      d="M85.186 21.8979H117.949C139.663 21.8979 157.265 36.6049 157.265 54.7468V268.264H124.502C102.788 268.264 85.186 253.557 85.186 235.415V21.8979Z"
      fill={color}
    />
    <path
      d="M170.368 54.749H209.684C231.398 54.749 249 69.456 249 87.5979V235.418H209.684C187.971 235.418 170.368 220.711 170.368 202.569V54.749Z"
      fill={color}
    />
  </svg>
);
