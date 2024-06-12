import { Units } from '@/_types/units'
import { ReactNode } from 'react'

export interface IUnitProps {
  unit: Units
  currentUnit: Units
  setUnit: (unit: Units) => void
  children: ReactNode
}
