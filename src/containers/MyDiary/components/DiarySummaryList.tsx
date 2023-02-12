import { IDiarySummary } from '@app/api/types'
import { FC, memo } from 'react'

import DiarySummary from './DiarySummary'

const DiarySummaryList: FC<{
  items: IDiarySummary[]
}> = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-3 diary-list">
      {items.map(({ content, date, title, id }) => (
        <DiarySummary key={id} date={date} title={title} content={content} />
      ))}
    </div>
  )
}

export default memo(DiarySummaryList)
