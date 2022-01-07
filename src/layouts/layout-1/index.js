import Head from 'next/head'
import {useSelector, shallowEqual} from 'react-redux'
import Navbar from '../../components/elements/navbar'
import Footer from '../../components/elements/footer'
// import LeftSidebar1 from '../../components/left-sidebar-1'
// import RightSidebar1 from '../../components/right-sidebar-1'

const Layout1 = ({children}) => {
  const {config, palettes} = useSelector(
    (state) => ({
      config: state.config,
      palettes: state.palettes
    }),
    shallowEqual
  )
  const {layout, collapsed} = {...config}
  let {background, navbar, leftSidebar, rightSidebar} = {
    ...palettes
  }

  return (
    <>
      <Head>
        <title>Federação Moç. Xadrez</title>
      </Head>
      <div
        data-layout={layout}
        data-collapsed={collapsed}
        data-background={background}
        data-navbar={navbar}
        data-left-sidebar={leftSidebar}
        data-right-sidebar={rightSidebar}
        className={`font-sans antialiased text-sm disable-scrollbars ${
          background === 'dark' ? 'dark' : ''
        }`}>
        {/* <RightSidebar1 /> */}
        <div className="wrapper">
          {/* <LeftSidebar1 /> */}
          <div className="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
            <Navbar />
            <div className="min-h-screen w-full p-4">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default Layout1
