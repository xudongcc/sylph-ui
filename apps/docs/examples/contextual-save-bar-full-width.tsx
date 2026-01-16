import {
  ContextualSaveBar,
  ContextualSaveBarActions,
  ContextualSaveBarDiscard,
  ContextualSaveBarMessage,
  ContextualSaveBarSave,
} from "@repo/contextual-save-bar";

const Example = () => (
  <ContextualSaveBar fullWidth relative>
    <ContextualSaveBarMessage>Unsaved changes</ContextualSaveBarMessage>
    <ContextualSaveBarActions>
      <ContextualSaveBarDiscard>Discard</ContextualSaveBarDiscard>
      <ContextualSaveBarSave>Save</ContextualSaveBarSave>
    </ContextualSaveBarActions>
  </ContextualSaveBar>
);

export default Example;
