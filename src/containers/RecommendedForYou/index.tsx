import { getRecommendedPosts } from '@app/api'
import Button from '@app/components/Button'
import useFakeFetch from '@app/hooks/useFakeFetch'
import { FC } from 'react'

import CategoryList, { IRecommendedCategory } from './components/CategoryList'
import RecommendedList from './components/RecommendedList'
import Skeleton from './components/Skeleton'

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
  const { data: posts, isLoading, refetch } = useFakeFetch(getRecommendedPosts, [8])

  const triggerLoadMore = () => {
    if (isLoading) {
      return
    }

    refetch(posts.length + 8)
  }

  return (
    <section className={className} id={id}>
      <CategoryList items={categories} />
      {posts && <RecommendedList posts={posts} />}
      {isLoading && <Skeleton />}
      <div className="text-center mt-6">
        <Button onClick={triggerLoadMore}>コラムをもっと見る</Button>
      </div>
    </section>
  )
}

export default RecommendedForYou
