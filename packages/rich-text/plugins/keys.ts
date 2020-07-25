import { backspaceInList } from '@pompom/commands'
import { toggleMark } from 'prosemirror-commands'
import { redo, undo } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import {
  liftListItem,
  sinkListItem,
  splitListItem,
} from 'prosemirror-schema-list'
import { Plugin } from 'prosemirror-state'

import { EditorSchema, schema } from '../schema'

export const keys: Plugin<EditorSchema> = keymap({
  'Mod-b': toggleMark<EditorSchema>(schema.marks.strong),
  'Mod-i': toggleMark<EditorSchema>(schema.marks.em),
  Enter: splitListItem<EditorSchema>(schema.nodes.list_item),
  'Shift-Tab': liftListItem<EditorSchema>(schema.nodes.list_item),
  Tab: sinkListItem<EditorSchema>(schema.nodes.list_item),
  Backspace: backspaceInList<EditorSchema>(schema.nodes.list_item),
  'Mod-z': undo,
  'Shift-Mod-z': redo,
})
