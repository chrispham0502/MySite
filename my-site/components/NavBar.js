import { useRouter } from "next/router";

const NavBar = () => {

  const router = useRouter()
  
  return (
    <nav>
      <div className=" bg-transparent flex flex-wrap justify-between items-stretch mx-auto">
          <a href="/" className={router.pathname == "/" ? "itemSelected" : "item"}>
              <span>trietpham.me</span>
          </a>
          <ul>
              <li>
                <a href="/about" className={router.pathname == "/about" ? "itemSelected" : "item"}>About</a>
              </li>
              <li >
                <a href="#" className={router.pathname == "/skills" ? "itemSelected" : "item"}>Skills</a>
              </li>
              <li >
                <a href="/experience" className={router.pathname == "/experience" ? "itemSelected" : "item"}>Experience</a>
              </li>
              <li>
                <a href="/contact" className={router.pathname == "/contact" ? "itemSelected" : "item"}>Contact</a>
              </li>
          </ul>
        </div>
    </nav>
  )
}

export default NavBar;