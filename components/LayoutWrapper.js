import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Navbar from './Navbar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <SectionContainer>
        <div className="flex flex-col justify-between min-h-screen">
          <main>{children}</main>
        </div>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
