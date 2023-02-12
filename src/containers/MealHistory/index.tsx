import { getMealHistory } from '@app/api'
import Button from '@app/components/Button'
import useFakeFetch from '@app/hooks/useFakeFetch'

import Filter from './components/Filter'
import HistoryList from './components/HistoryList'
import Skeleton from './components/Skeleton'

const MealHistory = () => {
  const { data: meals, refetch, isLoading } = useFakeFetch(getMealHistory, [8])

  const triggerLoadMore = () => {
    if (isLoading) {
      return
    }

    refetch(meals.length + 8)
  }

  return (
    <section aria-label="食事履歴" className="app-container text-center">
      <Filter />
      {meals && <HistoryList items={meals} />}
      {isLoading && <Skeleton />}
      <Button onClick={triggerLoadMore} className="mt-7">
        記録をもっと見る
      </Button>
    </section>
  )
}

export default MealHistory
