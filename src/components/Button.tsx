import { ComponentPropsWithoutRef } from "react";
import { Box } from "./Box";
import { StandardProps } from "../types/props";
import { Link } from "react-router-dom";
import { cn } from "../utils/utils";

export type ButtonProps<C extends "button" | typeof Link> = StandardProps &
  ComponentPropsWithoutRef<C>;

export const Button = <C extends "button" | typeof Link>(
  props: ButtonProps<C>,
) => {
  return (
    <Box
      as={"to" in props ? Link : "button"}
      {...props}
      className={cn(["Button", props.className])}
    />
  );
};
