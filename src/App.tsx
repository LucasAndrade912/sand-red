import React from 'react'
import { FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import './styles/global.css'

export function App() {
  return (
    <>
      <header className="w-full flex items-center justify-between relative">
        <h1 className="font-sigmar text-3xl">SandRed</h1>

        <nav>
          <ul className="flex gap-10">
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

      <section className="flex flex-col gap-[52px] items-center justify-center ml-[-64px] w-screen h-[412px] bg-presentation-cover bg-center text-white mt-10 mb-16">
        <h2 className="text-4xl font-semibold">SandRed Studios</h2>

        <span className="text-center font-medium text-xl">
          Somos um time apaixonado por tecnologia e games<br />
          Venha se divertir com a ente !
        </span>
      </section>

      <section id="jogos" className="mb-16">
        <h2 className="text-black font-sigmar text-xl text-center mb-16">Jogos</h2>


      </section>

      <section id="sobre-nos" className="mb-16">
        <h2 className="text-black font-sigmar text-xl text-center mb-16">Sobre Nós</h2>

        <div className="flex items-center">
          <div className="flex flex-col gap-6">
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

          <img src="/office.png" alt="Office picture" />
        </div>
      </section>

      <footer id="contato" className="px-16 py-8 flex items-center justify-between bg-black ml-[-64px] w-screen text-white">
        <img src="/sand-red-logo.svg" alt="SandRed Logo" />

        <span className="text-md">
          © 2022 - SandRed
        </span>

        <nav>
          <ul className="flex gap-3">
            <li>
              <a href="#">
                <FacebookLogo weight="fill" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedinLogo weight="fill" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramLogo weight="fill" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterLogo weight="fill" className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}