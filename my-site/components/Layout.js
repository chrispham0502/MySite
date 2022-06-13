import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = ({children}) => {
  return (
    <div className="layout">
        <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout