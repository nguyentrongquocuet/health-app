import MyRecommendImg from '@app/assets/MyRecommend-1.png'
import { APP_SECTION_IDS } from '@app/constants'
import { FC } from 'react'
import styled from 'styled-components'

const navItems = [
  {
    label: 'Body record',
    caption: '自分のカラダの記録',
    figure: MyRecommendImg,
    section: APP_SECTION_IDS.BodyRecord,
  },
  {
    label: 'My exercise',
    caption: '自分の運動の記録',
    figure: MyRecommendImg,
    section: APP_SECTION_IDS.Exercise,
  },
  {
    label: 'My diary',
    caption: '自分の日記',
    figure: MyRecommendImg,
    section: APP_SECTION_IDS.Diary,
  },
]

const NavButtons = () => {
  const toSection = (section: string) => {
    const sectionEl = document.querySelector(`#${section}`)

    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="flex gap-12 mt-14">
      {navItems.map(({ caption, figure, label, section }, idx) => (
        <NavButton caption={caption} figure={figure} label={label} key={idx} onClick={() => toSection(section)} />
      ))}
    </section>
  )
}

const NavButton: FC<{
  figure: string
  label: string
  caption: string
  onClick?: () => void
}> = ({ caption, figure, label, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      title={label}
      aria-label={label}
      className="text-center aspect-square relative w-full overflow-hidden bg-dark-600 border-primary-300"
    >
      <img className="absolute top-0 left-0 mix-blend-luminosity" alt={caption} src={figure} />
      <div className="relative">
        <ButtonLabel className="uppercase block w-fit mx-auto text-primary-300 font-body">{label}</ButtonLabel>
        <ButtonCaption className="bg-primary-400 block w-fit mx-auto">{caption}</ButtonCaption>
      </div>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border-width: 24px;
`

const ButtonLabel = styled.h4`
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.13px;
`

const ButtonCaption = styled.span`
  padding: 1px 16px 3px 16px;
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
`

export default NavButtons
