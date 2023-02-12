import { ReactComponent as CupIcon } from '@app/assets/icon_cup.svg'
import { ReactComponent as KnifeIcon } from '@app/assets/icon_knife.svg'

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

const Filter = () => {
  return (
    <div className="flex justify-center gap-16 py-6 font-body">
      {items.map((item) => (
        <FilterButton key={item.key} icon={item.icon} label={item.label} />
      ))}
    </div>
  )
}

export default Filter
