import { useState } from 'react'
import { hamburger } from '../assets/icons'
import { logo } from '../assets/images/'
import { navLinks } from '../constants'

const Nav = () => {
  const [dropDown, setDropdown] = useState(false)
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="max-container flex justify-between items-center align-middle">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[80px] rounded-xl bg-slate-gray"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-xl rounded-xl px-2 py-1 bg-black text-white font-bold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {dropDown && (
          <div className="hidden max-lg:block bg-white rounded-xl absolute right-[11%] top-[50%] mx-4 px-10 py-2 z-100">
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-white text-lg rounded-xl bg-black px-2 py-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={30}
            height={30}
            className="bg-white px-1 py-1"
            onClick={() => setDropdown(!dropDown)}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
