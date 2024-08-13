import { create } from "zustand";

import { defaultTemplate } from "../templates/default-template";

type RegisterStore = {
  markdown: string;
  setMarkdown: (newValue: string) => void;
};

export const useEditorStore = create<RegisterStore>((set) => ({
  markdown: defaultTemplate,
  setMarkdown: (newValue: string) => set({ markdown: newValue }),
}));
