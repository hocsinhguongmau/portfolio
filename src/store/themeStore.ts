import create from 'zustand'

type ToggleState = {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}
const useToggleStore = create<ToggleState>((set) => ({
  toggle: false,
  setToggle: (toggle: boolean) => set(() => ({ toggle: toggle })),
}))

export default useToggleStore
