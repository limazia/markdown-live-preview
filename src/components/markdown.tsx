"use client";

import { marked } from "marked";

export function Markdown() {
  const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.");

  return html;
}
