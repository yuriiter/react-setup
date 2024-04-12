import { ElementType, PropsWithChildren } from "react";
import { PolymorphicComponentProps } from "./polymorphicProps";
import { CSSInterpolation } from "@emotion/css";

export type PropsWithClassName = {
  className?: string;
};

export type PropsWithSx = {
  sx?: CSSInterpolation;
};

export type StandardProps = PropsWithChildren &
  PropsWithClassName &
  PropsWithSx;

export type BoxProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  StandardProps
>;
