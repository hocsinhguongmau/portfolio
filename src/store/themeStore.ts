import create from 'zustand'
import { persist } from 'zustand/middleware'

const useToggleStore = create(
  persist(
    (set: any) => ({
      toggle: false,
      setToggle: (toggle: boolean) => set(() => ({ toggle: toggle })),
    }),
    {
      name: 'theme-storage',
    },
  ),
)
export default useToggleStore
