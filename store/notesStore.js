import { create } from "zustand";

const useNotesStore = create((set) => ({
  fileName: "",
  summary: "",
  flashcards: [],

  setFile: (name) => set({ fileName: name }),
  setSummary: (text) => set({ summary: text }),
  setFlashcards: (cards) => set({ flashcards: cards }),

  generateSummary: (name) =>
    set({
      summary: `This is a summary generated from the file "${name}". 
It contains key concepts and important points for quick revision.`,
    }),

  generateFlashcards: (name) =>
    set({
      flashcards: [
        {
          question: `What is discussed in ${name}?`,
          answer: "Main concepts from your uploaded file."
        },
        {
          question: "What are the key takeaways?",
          answer: "Important points extracted for revision."
        }
      ],
    }),
}));

export default useNotesStore;
