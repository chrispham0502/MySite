import { useRouter } from "next/router";
import Link from "next/link"
import { useEffect, useState } from "react";



const NavBar = () => {
  
  const router = useRouter()

  const [isNavActive, setNavActive] = useState(false)

  return (
    <nav>
      <div className=" bg-transparent flex flex-wrap justify-between items-stretch mx-auto pl-3 pr-5 py-2 md:py-1">
        <Link href="/">
          <a className={router.pathname == "/" ? "itemSelected" : "item"}
              onClick = { () => setNavActive(false)}>
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
        <div className={`menu-mobile ${isNavActive? 'is-active' : ''}`}>
          <ul>
              <li>
                <Link href="/about">
                  <a className={router.pathname == "/about" ? "itemSelected" : "item"}
                      onClick = { () => setNavActive(false)}
                  >About</a>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <a  className={router.pathname == "/experience" ? "itemSelected" : "item"}
                  onClick = { () => setNavActive(false)}
                  >Experience</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a  className={router.pathname == "/contact" ? "itemSelected" : "item"}
                    onClick = { () => setNavActive(false)}
                  >Contact</a>
                </Link>
              </li>
          </ul>
        </div>
        <button className={`menu-button ${(router.pathname !== "/" && router.pathname !== "/thank")? "is-selected" : ""} ${isNavActive? 'is-active' : ''}`}
                onClick = {() => setNavActive(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
    </nav>
  )
}

export default NavBar;