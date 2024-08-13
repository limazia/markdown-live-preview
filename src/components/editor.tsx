"use client";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/ext-language_tools";

import { cn } from "@/shared/utils/cn";
import { Editor as EditorProps } from "@/shared/types/editor";
import { useEditorStore } from "@/shared/stores/EditorStore";

export function Editor({ className }: EditorProps) {
  const [data, setData] = useEditorStore((state) => [
    state.data,
    state.setData,
  ]);

  function onChange(newValue: string) {
    setData(newValue); 
  }

  return (
    <AceEditor
      className={cn("w-full", className)}
      mode="markdown"
      theme="chrome"
      name="editor"
      onChange={onChange}
      value={data} 
      fontSize={14}
      lineHeight={19}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
