"use client";

import type { ComponentProps, FC, PropsWithChildren } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";
import { Button } from "@/components/ui/button";

const contextualSaveBarVariants = tv({
  slots: {
    base: "fixed top-0 right-0 left-0 z-50 h-16 border-b bg-background text-foreground md:left-(--sidebar-width) md:group-has-data-[collapsible=icon]/sidebar-wrapper:left-(--sidebar-width-icon)",
    content: "mx-auto flex size-full max-w-5xl items-center justify-end px-4",
  },
  variants: {
    fullWidth: {
      true: {
        content: "max-w-full",
      },
    },
    absolute: {
      true: {
        base: "absolute w-full",
      },
    },
  },
  defaultVariants: {
    fullWidth: false,
    absolute: false,
  },
});

export type ContextualSaveBarProps = PropsWithChildren<
  VariantProps<typeof contextualSaveBarVariants>
>;

export const ContextualSaveBar: FC<ContextualSaveBarProps> = (props) => {
  const { base, content } = contextualSaveBarVariants(props);
  return (
    <div className={base()}>
      <div className={content()}>{props.children}</div>
    </div>
  );
};

const contextualSaveBarMessageVariants = tv({
  base: "flex-1",
});

export type ContextualSaveBarMessageProps = PropsWithChildren<
  VariantProps<typeof contextualSaveBarMessageVariants>
>;

export const ContextualSaveBarMessage: FC<ContextualSaveBarMessageProps> = (
  props
) => {
  return (
    <div className={contextualSaveBarMessageVariants(props)}>
      {props.children}
    </div>
  );
};

export const contextualSaveBarActionsVariants = tv({
  base: "flex gap-2",
});

export type ContextualSaveBarActionsProps = PropsWithChildren<
  VariantProps<typeof contextualSaveBarActionsVariants>
>;

export const ContextualSaveBarActions: FC<ContextualSaveBarActionsProps> = (
  props
) => {
  return (
    <div className={contextualSaveBarActionsVariants(props)}>
      {props.children}
    </div>
  );
};

export type ContextualSaveBarDiscardProps = ComponentProps<typeof Button>;

export const ContextualSaveBarDiscard: FC<ContextualSaveBarDiscardProps> = (
  props
) => {
  return (
    <Button variant="outline" {...props}>
      {props.children}
    </Button>
  );
};

export type ContextualSaveBarSaveProps = ComponentProps<typeof Button>;

export const ContextualSaveBarSave: FC<ContextualSaveBarSaveProps> = (
  props
) => {
  return (
    <Button variant="default" {...props}>
      {props.children}
    </Button>
  );
};
