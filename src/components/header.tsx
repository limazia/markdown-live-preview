"use client";

import { useCallback, useState } from "react";

import { resetEditor } from "@/shared/stores/EditorStore";
import { useEditorStore } from "@/shared/stores/EditorStore";

import { GitHub } from "./icons/GitHub";

export function Header() {
  const markdown = useEditorStore((state) => state.markdown);

  const [copyStatus, setCopyStatus] = useState("Copy");

  const handleReset = useCallback(() => {
    resetEditor();
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(markdown)
      .then(() => {
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus("Copy"), 3000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }, [markdown]);

  return (
    <header className="w-full h-10 flex items-center justify-between text-xs text-white bg-[#444] py-2 px-4">
      <div className="flex items-center gap-5">
        <a href="/" className="text-white hover:underline">
          Markdown Live Preview
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            aria-label="Reset editor"
          >
            Reset
          </button>

          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            aria-label="Copy content"
          >
            {copyStatus ?? "Copy"}
          </button>
        </div>
      </div>

      <a
        href="https://github.com/limazia/markdown-live-preview"
        className="flex items-center"
        aria-label="GitHub repository"
        target="_blank"
      >
        <GitHub className="w-5 h-5 text-white hover:text-gray-300" />
      </a>
    </header>
  );
}
