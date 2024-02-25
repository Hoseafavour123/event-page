import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images/'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className='max-container flex align-middle'>
            <a href="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-4 py-1 rounded bg-gradient-to-r from-red-500 via-purple-400 to-pink-500 text-bold text-2xl text-white">
              Stellar
            </span>
            Shoes
          </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
        </nav>
    </header>
  )
}

export default Nav