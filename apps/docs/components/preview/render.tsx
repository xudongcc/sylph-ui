import type { ReactNode } from "react";

interface PreviewRenderProps {
  children: ReactNode;
}

export const PreviewRender = ({ children }: PreviewRenderProps) => {
  return (
    <div className="relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden p-8 [--primary-foreground:oklch(0.985_0_0)] [--primary:oklch(0.205_0_0)] dark:[--primary-foreground:oklch(0.205_0_0)] dark:[--primary:oklch(0.985_0_0)]">
      <div className="border-border/50 absolute left-0 right-0 top-8 -translate-y-px border border-dashed" />
      <div className="border-border/50 absolute bottom-8 left-0 right-0 translate-y-px border border-dashed" />
      <div className="border-border/50 absolute bottom-0 left-8 top-0 -translate-x-px border border-dashed" />
      <div className="border-border/50 absolute bottom-0 right-8 top-0 translate-x-px border border-dashed" />
      {children}
    </div>
  );
};
