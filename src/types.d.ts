type CoordinateType = {
  x: number
  y: number
}

type ThemeType = {
  body?: string
  text?: string
  background?: string
}

type ThemePropsType = {
  toggle?: boolean
}
type ToggleState = {
  toggle: boolean
  setToggle: (toggle: boolean) => void
}
