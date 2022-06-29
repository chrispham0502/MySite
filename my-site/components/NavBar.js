import { useRouter } from "next/router";
import Link from "next/link"

const NavBar = () => {
  
  const router = useRouter()

  return (
    <nav>
      <div className=" bg-transparent flex flex-wrap justify-between items-stretch mx-auto px-3 py-1">
        <Link href="/">
          <a className={router.pathname == "/" ? "itemSelected" : "item"}>
              <span>trietpham.me</span>
          </a>
        </Link>
        <div className="menu">
          <ul>
              <li>
                <Link href="/about">
                  <a className={router.pathname == "/about" ? "itemSelected" : "item"}>About</a>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <a  className={router.pathname == "/experience" ? "itemSelected" : "item"}>Experience</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a  className={router.pathname == "/contact" ? "itemSelected" : "item"}>Contact</a>
                </Link>
              </li>
          </ul>
        </div>
        <button className="menu-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        
        </div>
    </nav>
  )
}

export default NavBar;