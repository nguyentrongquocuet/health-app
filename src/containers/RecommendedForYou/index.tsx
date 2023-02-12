import { getRecommendedPosts } from '@app/api'
import Button from '@app/components/Button'
import { FC } from 'react'

import CategoryList, { IRecommendedCategory } from './components/CategoryList'
import RecommendedList from './components/RecommendedList'

const categories: IRecommendedCategory[] = [
  {
    key: 'column',
    label: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    key: 'diet',
    label: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    key: 'beauty',
    label: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    key: 'health',
    label: 'RECOMMENDED HEALTH',
    description: '健康',
  },
]

const RecommendedForYou: FC<{
  className?: string
  id?: string
}> = ({ className, id }) => {
  return (
    <section className={className} id={id}>
      <CategoryList items={categories} />
      <RecommendedList posts={getRecommendedPosts()} />
      <div className="text-center mt-6">
        <Button>コラムをもっと見る</Button>
      </div>
    </section>
  )
}

export default RecommendedForYou
