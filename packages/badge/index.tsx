"use client";

import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground",
      outline: "text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps extends ComponentProps<"div">, BadgeVariantProps {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <div className={badgeVariants({ variant, className })} {...props} />
);
