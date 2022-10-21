import { useState, useEffect } from 'react'
import { FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo, List } from 'phosphor-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/global.css'

import { Overlay } from './components/Overlay'

export function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    centerMode: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: 'linear'
  }

  function handleOpenMobileMenu() {
    if (isMobile) {
      setIsMenuOpen(true)
    }
  }

  function handleCloseMobileMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 375)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header className="w-full flex sm:flex-row-reverse items-center justify-between relative">
        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <img src="/sand-red-logo.svg" alt="SandRed Logo" className="h-10" />
          </span>

          <h1 className="font-sigmar text-3xl sm:text-2xl">
            SandRed
          </h1>
        </div>

        <List className="hidden sm:block w-8 h-8" onClick={handleOpenMobileMenu} />

        { isMobile && isMenuOpen && <Overlay onClick={handleCloseMobileMenu} /> }

        <nav
          className={`transition-all sm:fixed sm:p-8 sm:z-20 sm:bg-zinc-700 sm:top-0 sm:w-[65vw] sm:h-screen sm:text-white ${isMenuOpen ? 'left-0' : '-left-[100vw]'}`}
        >
          <ul className="flex gap-10 sm:gap-0 sm:flex-col sm:justify-between sm:h-full">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#jogos" className="hover:underline">Jogos</a>
            </li>
            <li>
              <a href="#sobre-nos" className="hover:underline">Sobre Nós</a>
            </li>
            <li>
              <a href="#contato" className="hover:underline">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="flex flex-col gap-[52px] items-center justify-center -ml-[64px] w-screen h-[412px] bg-presentation-cover bg-center text-white mt-10 mb-16 sm:-ml-6 sm:h-[174px] sm:gap-5 sm:my-8">
        <h2 className="text-4xl font-semibold sm:text-3xl">SandRed Studios</h2>

        <span className="text-center font-medium text-xl sm:text-sm">
          Somos um time apaixonado por tecnologia e games<br />
          Venha se divertir com a ente !
        </span>
      </section>

      <section id="jogos" className="mb-16 sm:mb-8">
        <h2 className="text-black font-sigmar text-xl text-center mb-16 sm:text-lg sm:mb-8">
          Jogos
        </h2>

        <Slider {...settings} className="m-0 mx-auto max-w-[1670px] sm:h-auto">
          <div>
            <img src="/game1.png" alt="Game 1" className="object-cover" />
          </div>
          <div>
            <img src="/game2.png" alt="Game 2" className="object-cover" />
          </div>
          <div>
            <img src="/game3.png" alt="Game 3" className="object-cover" />
          </div>
          <div>
            <img src="/game4.png" alt="Game 4" className="object-cover" />
          </div>
          <div>
            <img src="/game5.png" alt="Game 5" className="object-cover" />
          </div>
        </Slider>
      </section>

      <section id="sobre-nos" className="mb-16 sm:mb-8">
        <h2 className="text-black font-sigmar text-xl text-center mb-16 sm:text-lg sm:mb-8">
          Sobre Nós
        </h2>

        <div className="flex items-center sm:flex-col">
          <div className="flex flex-col gap-6 sm:text-xs">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada velit fermentum nam fermentum, amet sed ultrices duis. 
            </p>

            <p>
              Volutpat tincidunt sagittis porta ultricies mus ac commodo sed tristique. Aliquam posuere mauris volutpat iaculis purus rhoncus amet mi. Sem ut magna tortor, lorem sit tincidunt sit.
            </p>

            <p>
              Ut nisl risus tincidunt sollicitudin et, a at. Aliquam ac elit et, maecenas. Nam massa quis neque, ullamcorper in nibh.
            </p>
          </div>

          <img src="/office.png" alt="Office picture" className="sm:hidden" />
        </div>
      </section>

      <footer id="contato" className="px-16 py-8 flex items-center justify-between bg-black -ml-[64px] w-screen text-white sm:-ml-6 sm:w-screen sm:p-6">
        <img src="/sand-red-logo.svg" alt="SandRed Logo" className="sm:w-5 sm:h-10" />

        <span className="text-md sm:text-xs">
          © 2022 - SandRed
        </span>

        <nav>
          <ul className="flex gap-3">
            <li>
              <a href="#">
                <FacebookLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedinLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterLogo weight="fill" className="w-8 h-8 sm:w-5 sm:h-5" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}