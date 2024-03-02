import { copyrightSign } from '../assets/icons'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets/images'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[80px] rounded-xl bg-slate-gray"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm ">
            An academy where young people are trained, equipped and nurtured to
            be agents of change in their world.
            <br />
            On a mission to raise young leaders who will positively impact the
            society and become problem solver's and solution providers.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <a href={icon.link}>
                  {' '}
                  <img src={icon.src} width={24} height={24} />{' '}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6 lg:gap-10 gap-20 flex-wrap">
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
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex  items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="rounded-full m-0"
            alt=""
          />
          <p>Copyright. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
