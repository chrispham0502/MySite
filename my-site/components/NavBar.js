import { useRouter } from "next/router";

const NavBar = () => {

  const router = useRouter()
  
  return (
    <nav>
      <div class=" bg-transparent flex flex-wrap justify-between items-stretch mx-auto">
          <a href="/" class={router.pathname == "/" ? "itemSelected" : "item"}>
              <span>trietpham.me</span>
          </a>
          <ul>
              <li>
                <a href="/about" class={router.pathname == "/about" ? "itemSelected" : "item"}>About</a>
              </li>
              <li >
                <a href="#" class={router.pathname == "/skills" ? "itemSelected" : "item"}>Skills</a>
              </li>
              <li >
                <a href="/experience" class={router.pathname == "/experience" ? "itemSelected" : "item"}>Experience</a>
              </li>
              <li>
                <a href="/contact" class={router.pathname == "/contact" ? "itemSelected" : "item"}>Contact</a>
              </li>
          </ul>
        </div>
    </nav>
  )
}

export default NavBar;