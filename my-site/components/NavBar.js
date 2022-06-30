import { useRouter } from "next/router";
import Link from "next/link"
import { useEffect, useState } from "react";



const NavBar = () => {
  
  const router = useRouter()

  const [menuButton, setMenuButton] = useState("menu-button")
  const [menuMobile, setMenuMobile] = useState("menu-mobile")

  const handleMenuButtonClick = () => {
    if (router.pathname == "/"){
      if (menuButton == "menu-button"){
        setMenuButton("menu-button is-active")
      }
      else {
        setMenuButton("menu-button")
      }
    }
    else {
      if (menuButton == "menu-button is-selected"){
        setMenuButton("menu-button is-active is-selected")
      }
      else {
        setMenuButton("menu-button is-selected")
      }
    }
    
    if (menuMobile == "menu-mobile"){
      setMenuMobile("menu-mobile is-active")
    }
    else {
      setMenuMobile("menu-mobile")
    }

  };

  return (
    <nav>
      <div className=" bg-transparent flex flex-wrap justify-between items-stretch mx-auto pl-3 pr-5 py-2 md:py-1">
        <Link href="/">
          <a className={router.pathname == "/" ? "itemSelected" : "item"}
          onClick = { () => {
            setMenuButton("menu-button");
            setMenuMobile("menu-mobile");
          }}>
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
        <div className={menuMobile}>
          <ul>
              <li>
                <Link href="/about">
                  <a className={router.pathname == "/about" ? "itemSelected" : "item"}
                      onClick = { () => {
                        setMenuButton("menu-button is-selected");
                        setMenuMobile("menu-mobile");
                      }}>About</a>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <a  className={router.pathname == "/experience" ? "itemSelected" : "item"}
                  onClick = { () => {
                    setMenuButton("menu-button is-selected");
                    setMenuMobile("menu-mobile");
                  }}>Experience</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a  className={router.pathname == "/contact" ? "itemSelected" : "item"}
                  onClick = { () => {
                    setMenuButton("menu-button is-selected");
                    setMenuMobile("menu-mobile");
                  }}>Contact</a>
                </Link>
              </li>
          </ul>
        </div>
        <button className={menuButton}
                onClick = {handleMenuButtonClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
    </nav>
  )
}

export default NavBar;