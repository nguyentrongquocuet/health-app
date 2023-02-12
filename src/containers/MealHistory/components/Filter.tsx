import { ReactComponent as CupIcon } from '@app/assets/icon_cup.svg'
import { ReactComponent as KnifeIcon } from '@app/assets/icon_knife.svg'
import { FC } from 'react'

import FilterButton from './FilterButton'

const items = [
  {
    key: 'morning',
    label: 'Morning',
    icon: <KnifeIcon />,
  },
  {
    key: 'lunch',
    label: 'Lunch',
    icon: <KnifeIcon />,
  },
  {
    key: 'dinner',
    label: 'Dinner',
    icon: <KnifeIcon />,
  },
  {
    key: 'snack',
    label: 'Snack',
    icon: <CupIcon />,
  },
]

const Filter: FC<{
  onChange?: (newKey: string) => void
}> = ({ onChange }) => {
  return (
    <div className="flex justify-center gap-16 py-6 font-body">
      {items.map((item) => (
        <FilterButton onClick={() => onChange?.(item.key)} key={item.key} icon={item.icon} label={item.label} />
      ))}
    </div>
  )
}

export default Filter
