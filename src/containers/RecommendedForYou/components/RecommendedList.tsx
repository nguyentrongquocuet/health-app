import { IRecommendedPost } from '@app/api/types'
import AspectRatioBox from '@app/components/AspectRatioBox'
import dayjs from 'dayjs'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RecommendedList: FC<{
  posts: IRecommendedPost[]
}> = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-5 mt-14">
      {posts.map((post) => (
        <RecommendedPost key={post.id} {...post} />
      ))}
    </div>
  )
}

const RecommendedPost: FC<IRecommendedPost> = ({ date, figure, summary, hashtags }) => {
  return (
    <div title={summary}>
      <AspectRatioBox aspectRatio="13/8">
        <img className="block w-full h-full object-cover" alt={summary} src={figure} />
        <Tag className="absolute bottom-0 left-0 px-2 bg-primary-300 font-body">{dayjs(date).format('YYYY.MM.DD  HH:mm')}</Tag>
      </AspectRatioBox>
      <PostSummary className="text-dark-500 mt-2 line-clamp-2">{summary}</PostSummary>
      <div className="text-primary-400">
        {hashtags.map((tag) => (
          <HashTag to="#" key={tag}>
            #{tag}
          </HashTag>
        ))}
      </div>
    </div>
  )
}

const PostSummary = styled.p`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.08px;
`

const Tag = styled.span`
  font-size: 15px;
  line-height: 24px;
`
const HashTag = styled(Link)`
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.06;

  & + & {
    margin-left: 8px;
  }
`

export default RecommendedList
