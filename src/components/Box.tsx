"use client";
import { ElementType } from "react";
import { css } from "@emotion/css";
import { BoxProps } from "../types/props";
import { cn } from "../utils/utils";

export const Box = <C extends ElementType = "div">(props: BoxProps<C>) => {
  const { as, children, sx, className, mRef, ...rest } = props;

  const Component = as ?? "div";

  return (
    <Component ref={mRef} className={cn([css(sx), className])} {...rest}>
      {children}
    </Component>
  );
};
