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

export const resetEditor = () => {
  const { setMarkdown } = useEditorStore.getState();
  
  if (window.confirm("Are you sure you want to reset? Your changes will be lost.")) {
    setMarkdown(defaultTemplate);
  }
};
