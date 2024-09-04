"use client";

import MarkdownComponent from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { cn } from "@/shared/utils/cn";
import { useEditorStore } from "@/shared/stores/EditorStore";
import { Markdown as MarkdownProps } from "@/shared/types/markdown";

export function Markdown({ className }: MarkdownProps) {
  const markdown = useEditorStore((state) => state.markdown);

  return (
    <div className="markdown-body">
      <MarkdownComponent
        className={cn("!w-full !h-full px-2", className)}
        rehypePlugins={[rehypeHighlight, remarkGfm]}
      >
        {markdown}
      </MarkdownComponent>
    </div>
  );
}
