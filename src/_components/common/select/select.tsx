'use client'

import { FC } from 'react'
import dynamic from 'next/dynamic'
import classnames from 'classnames'
import { CustomSelectProps } from './types'
import styles from './styles.module.scss'

const DynamicSelect = dynamic(() => import('react-select'), { ssr: false })

export const Select: FC<CustomSelectProps> = ({ className, ...props }) => {
  const customStyles = {
    dropdownIndicator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
  }

  return (
    <DynamicSelect
      styles={customStyles}
      className={classnames(styles.select, className)}
      classNamePrefix='custom-select'
      isClearable
      isSearchable
      {...props}
    />
  )
}
