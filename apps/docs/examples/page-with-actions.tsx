"use client";

import { Page } from "@repo/page";

const Example = () => (
  <Page
    description="Manage your products and inventory."
    primaryAction={{
      content: "Add product",
      onAction: () => console.log("Add product"),
    }}
    secondaryActions={[
      {
        content: "Export",
        onAction: () => console.log("Export"),
      },
      {
        content: "Import",
        onAction: () => console.log("Import"),
      },
    ]}
    title="Products"
  >
    <p className="text-muted-foreground">Your page content goes here.</p>
  </Page>
);

export default Example;
