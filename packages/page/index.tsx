"use client";

import { MoreHorizontal } from "lucide-react";
import type { FC, Key, ReactElement, ReactNode } from "react";
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
  secondaryActions?: PageActionProps[];
  fullWidth?: boolean;
  breadcrumbs?: ReactElement[];
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
        fullWidth && "max-w-full"
      )}
    >
      <header className="mb-4 flex items-center justify-between gap-2">
        <div>
          <h2 className="flex h-9 items-center font-bold text-xl tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-xs">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop: Show secondary action buttons */}
          {secondaryActions?.map((action, index) => (
            <Button
              className="hidden md:inline-flex"
              disabled={action.disabled}
              key={action.key ?? index}
              onClick={action.onAction}
              variant="outline"
            >
              {action.content}
            </Button>
          ))}

          {/* Mobile: Show secondary actions in dropdown menu */}
          {hasSecondaryActions && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="md:hidden" size="icon" variant="outline">
                  <MoreHorizontal className="size-4" />
                  <span className="sr-only">More actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {secondaryActions.map((action, index) => (
                  <DropdownMenuItem
                    disabled={action.disabled}
                    key={action.key ?? index}
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
              onClick={primaryAction.onAction}
              variant="default"
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
