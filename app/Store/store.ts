import {create} from 'zustand';


interface FilterState {
  languages: string[];
  difficulties: string[];
  topics: string[];
  setLanguages: (languages: string[]) => void;
  setDifficulties: (difficulties: string[]) => void;
  setTopics: (topics: string[]) => void;
}


const useFilterStore = create<FilterState>((set) => ({
  languages: [],
  difficulties: [],
  topics: [],
  setLanguages: (languages) => set({ languages }),
  setDifficulties: (difficulties) => set({ difficulties }),
  setTopics: (topics) => set({ topics }),
}));

export default useFilterStore;
