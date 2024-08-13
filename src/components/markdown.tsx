"use client";

import MarkdownComponent from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import { useEditorStore } from "@/shared/stores/EditorStore";
import { Markdown as MarkdownProps } from "@/shared/types/markdown";
import { cn } from "@/shared/utils/cn";

export function Markdown({ className }: MarkdownProps) {
  const markdown = useEditorStore((state) => state.markdown);

  return (
    <div className={cn("w-full", className)}>
      <MarkdownComponent rehypePlugins={[rehypeHighlight]}>
        {markdown}
      </MarkdownComponent>
    </div>
  );
}
