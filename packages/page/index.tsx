"use client";

import { MoreHorizontal } from "lucide-react";
import type { FC, Key, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface PageActionProps {
  key?: Key;
  disabled?: boolean;
  content: ReactNode;
  onAction?: () => Promise<void> | void;
}

export interface PageProps {
  children: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  primaryAction?: PageActionProps;
  secondaryActions?: Array<PageActionProps>;
  fullWidth?: boolean;
}

export const Page: FC<PageProps> = ({
  children,
  title,
  description,
  primaryAction,
  secondaryActions,
  fullWidth,
}) => {
  const hasSecondaryActions = secondaryActions && secondaryActions.length > 0;

  return (
    <div
      className={cn(
        "mx-auto flex min-h-min w-full max-w-5xl flex-1 flex-col p-4",
        fullWidth && "max-w-full",
      )}
    >
      <header className="flex justify-between gap-2 pb-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>

        <div className="flex gap-2">
          {/* Desktop: Show secondary action buttons */}
          {secondaryActions?.map((action, index) => (
            <Button
              key={action.key ?? index}
              className="hidden md:inline-flex"
              disabled={action.disabled}
              variant="outline"
              onClick={action.onAction}
            >
              {action.content}
            </Button>
          ))}

          {/* Mobile: Show secondary actions in dropdown menu */}
          {hasSecondaryActions && (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button className="md:hidden" size="icon" variant="outline">
                    <MoreHorizontal className="size-4" />
                    <span className="sr-only">More actions</span>
                  </Button>
                }
              />

              <DropdownMenuContent align="end">
                {secondaryActions.map((action, index) => (
                  <DropdownMenuItem
                    key={action.key ?? index}
                    disabled={action.disabled}
                    onClick={action.onAction}
                  >
                    {action.content}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Primary action: Always visible */}
          {primaryAction && (
            <Button
              disabled={primaryAction.disabled}
              variant="default"
              onClick={primaryAction.onAction}
            >
              {primaryAction.content}
            </Button>
          )}
        </div>
      </header>

      <div className="flex-1">{children}</div>
    </div>
  );
};
