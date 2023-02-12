import styled from 'styled-components'

const items = ['会員登録', '運営会社', '利用規約', '個人情報の取扱について', '特定商取引法に基づく表記', 'お問い合わせ']

const AppFooter = () => {
  return (
    <Footer id="app-footer" className="bg-dark-500 h-32 flex items-center">
      <div className="app-container basis-full">
        <ul className="w-full">
          {items.map((text, idx) => (
            <FooterItem tabIndex={0} className="inline" key={idx}>
              {text}
            </FooterItem>
          ))}
        </ul>
      </div>
    </Footer>
  )
}

const Footer = styled.footer`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.03px;
`

const FooterItem = styled.li`
  &:not(:first-child) {
    margin-left: 45px;
  }
`

export default AppFooter
