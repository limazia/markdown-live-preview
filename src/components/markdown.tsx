"use client";

import MarkdownComponent from "marked-react";
import Lowlight from "react-lowlight";
import javascript from "highlight.js/lib/languages/javascript";

import { useEditorStore } from "@/shared/stores/EditorStore";

Lowlight.registerLanguage("js", javascript);

export function Markdown() {
  const data = useEditorStore((state) => state.data);

  const renderer = {
    code(snippet, lang) {
      return <Lowlight key="sadas" language={lang} value={snippet} />;
    },
  };

  return <MarkdownComponent value={data} renderer={renderer} />;
}
