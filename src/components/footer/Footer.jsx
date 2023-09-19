function FooterSection({title, items}){
  const listItems = items.map(item => 
    <div key={title}>
      <a className="page-link" href="#">{item}</a>
    </div>)
  return (
    <section className="footer-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {listItems}
      </div>
    </section>
  )
}

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <object data="../../public/icons/logo.png" type="image/svg+xml" />
        </div>
        <FooterSection 
          title={'客戶服務'}
          items={['運送說明', '退換貨相關', '付款資訊', 'FAQ']}
        />
        <FooterSection
          title={'關於我們'}
          items={['品牌故事', '媒體聯繫', 'Press kit']}
        />
        <FooterSection
          title={'資訊'}
          items={['隱私權政策', 'Cookie', 'GDPR']}
        />
        <section className="footer-section">
          <h2 className="section-title">追蹤 ALPHA Shop</h2>
          <div className="section-content">
            <div className="tel-info">+886 02123-45678</div>
            <div className="social-icon-group">
              <object data="../../public/icons/facebook.png" type="image/svg+xml" />
              <object data="../../public/icons/instagram.png" type="image/svg+xml" />
              <object data="../../public/icons/whatapp.png" type="image/svg+xml" />
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}