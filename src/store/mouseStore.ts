import create from 'zustand'

type MouseCoordinate = {
  mouse: CoordinateType
  setMouse: (mouse: CoordinateType) => void
}

const useMouseStore = create<MouseCoordinate>((set) => ({
  mouse: { x: 0, y: 0 },
  setMouse: (mouse: CoordinateType) => set(() => ({ mouse: mouse })),
}))

export default useMouseStore
