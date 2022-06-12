import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = ({children}) => {
  return (
    <div style={{height:"100vh"}}>
        <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout