import { FC } from 'react'
import styled from 'styled-components'

export interface IRecommendedCategory {
  key: string
  label: string
  description: string
}

const CategoryList: FC<{
  items: IRecommendedCategory[]
}> = ({ items: categories }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {categories.map(({ description, key, label }) => (
        <Category key={key} label={label} description={description} />
      ))}
    </div>
  )
}

const Category: FC<{
  label: string
  description: string
  onClick?: () => void
}> = ({ description, label, onClick }) => {
  return (
    <CategoryWrapper onClick={onClick} className="text-center bg-dark-600">
      <CategoryLabel className="font-body text-primary-300">{label}</CategoryLabel>
      <Divider className="border-t border-t-light w-14 mx-auto" />
      <CategoryDescription>{description}</CategoryDescription>
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.button`
  padding: 24px 8px 22px 8px;
`

const CategoryLabel = styled.h4`
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.11px;
`

const CategoryDescription = styled.p`
  font-size: 18px;
  line-height: 26px;
`

const Divider = styled.div`
  margin-top: 10px;
  margin-bottom: 8px;
`

export default CategoryList
