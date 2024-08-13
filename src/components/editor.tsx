"use client";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/ext-language_tools";

import { cn } from "@/shared/utils/cn";
import { Editor as EditorProps } from "@/shared/types/editor";
import { useEditorStore } from "@/shared/stores/EditorStore";

export function Editor({ className }: EditorProps) {
  const [markdown, setMarkdown] = useEditorStore((state) => [
    state.markdown,
    state.setMarkdown,
  ]);

  function onChange(newValue: string) {
    setMarkdown(newValue);
  }

  return (
    <AceEditor
      className={cn("!w-full !h-full", className)}
      mode="markdown"
      theme="chrome"
      name="editor"
      onChange={onChange}
      value={markdown}
      fontSize={14}
      lineHeight={19}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      wrapEnabled={true}
      setOptions={{
        autoScrollEditorIntoView: true,
        indentedSoftWrap: false,
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      editorProps={{ $blockScrolling: true }}
    />
  );
}
