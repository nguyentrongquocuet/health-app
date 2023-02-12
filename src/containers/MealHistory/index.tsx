import { getMealHistory } from '@app/api'
import Button from '@app/components/Button'

import Filter from './components/Filter'
import HistoryList from './components/HistoryList'

const MealHistory = () => {
  return (
    <section aria-label="食事履歴" className="app-container text-center">
      <Filter />
      <HistoryList meals={getMealHistory()} />
      <Button className="mt-7">記録をもっと見る</Button>
    </section>
  )
}

export default MealHistory
