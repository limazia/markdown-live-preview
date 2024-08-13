import { SVGProps as SVGReactProps } from "react";

export type SVGProps = {
  className?: string;
} & SVGReactProps<SVGSVGElement>;