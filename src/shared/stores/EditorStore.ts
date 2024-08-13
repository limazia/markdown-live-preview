import { create } from "zustand";

import { defaultTemplate } from "../templates/default-template";

type RegisterStore = {
  data: string;
  setData: (newValue: string) => void;
};

export const useEditorStore = create<RegisterStore>((set) => ({
  data: defaultTemplate,
  setData: (newValue: string) => set({ data: newValue }),
}));
