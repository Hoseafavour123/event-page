import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a
            href="/"
            className=" whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-4 py-1 rounded bg-gradient-to-r from-red-500 via-purple-400 to-pink-500 text-bold text-2xl text-white">
              Stellar
            </span>
            Shoes
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            rem iusto ipsa dolor, laudantium tempora, voluptatem error eum sed
            harum odio itaque. Sunt, quibusdam dolorum voluptatum unde iure
            quaerat. Suscipit.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between mt-6 lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="rounded-full m-0"
            alt=""
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-monserrat cursor-pointer ">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
