"use client";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/ext-language_tools";

import { cn } from "@/shared/utils/cn";
import { Editor as EditorProps } from "@/shared/types/editor";

import { defaultTemplate } from "./default-template";

export function Editor({ className } : EditorProps) {
  function onChange(newValue: any) {
    console.log("change", newValue);
  }

  return (
    <AceEditor
    className={cn("w-full", className)}
      mode="markdown"
      theme="chrome"
      name="editor"
      onChange={onChange}
      value={defaultTemplate}
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
