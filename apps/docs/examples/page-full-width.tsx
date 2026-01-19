import { Page } from "@repo/page";

const Example = () => (
  <Page
    description="This page uses the full width of the container."
    fullWidth
    title="Dashboard"
  >
    <p className="text-muted-foreground">Your page content goes here.</p>
  </Page>
);

export default Example;
