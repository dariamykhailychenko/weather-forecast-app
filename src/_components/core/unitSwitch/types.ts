import { Units } from '@/_types/units'

export interface IUnitSwitchProps {
  setUnit: (unit: Units) => void
  unit: Units
}
