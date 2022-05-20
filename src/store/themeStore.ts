import create from 'zustand'

const useToggleStore = create<ToggleState>((set) => ({
  toggle: false,
  setToggle: (toggle: boolean) => set(() => ({ toggle: toggle })),
}))

export default useToggleStore
